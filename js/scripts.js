//Business Logic
var userProtein = [];
var userVeggie = [];

function Meal(base, protein, veggie, cheese) {
  this.base = base;
  this.protein = protein;
  this.veggie = veggie;
  this.cheese = cheese;
}

Meal.prototype.Recipe = function() {
  var mealBase = this.base;
  var mealProtein = this.protein;
  var mealVeggie = this.veggie;
  var mealCheese = this.cheese;

  if (mealBase === "pasta") {
    if (mealProtein.includes("beef") === true) {
      return "meatballs"
    } else if (mealProtein.includes("pork") === true || mealProtein.includes("chicken") === true || mealProtein.includes("tofu") === true) {
      return "ramen"
    } else if (mealVeggie.includes("carrots") === true || mealVeggie.includes("onions") === true || mealVeggie.includes("broccoli") === true || mealVeggie.includes("peppers") === true) {
      return "veggie pasta"
    } else {
      return "no meal"
    }
  } else if (mealBase === "zoodles") {
    if (mealProtein.includes("beef") === true) {
      return "meatballs"
    } else if (mealProtein.includes("pork") === true || mealProtein.includes("chicken") === true || mealProtein.includes("tofu") === true) {
      if (mealVeggie.includes("carrots") === true || mealVeggie.includes("onions") === true || mealVeggie.includes("broccoli") === true || mealVeggie.includes("peppers") === true) {
        return "veggie pasta"
      } else {
        return "protein pasta"
      }
    } else {
      return "no meal"
    }
  } else if (mealBase === "rice") {
    if (mealProtein.includes("beef") === true || mealProtein.includes("pork") === true || mealProtein.includes("chicken") === true || mealProtein.includes("tofu") === true) {
      if (mealVeggie.includes("carrots") === true || mealVeggie.includes("onions") === true || mealVeggie.includes("broccoli") === true || mealVeggie.includes("peppers") === true) {
        return "teriyaki veggie bowl"
      } else {
        return "protein veggie bowl"
      }
    } else if (mealProtein.includes("fish") === true) {
      if (mealVeggie.includes("avocado") === true) {
        return "sushi avocado"
      } else {
        return "sushi"
      }
    } else {
      return "no meal"
    }
  } else if (mealBase === "bread") {
    if (mealProtein.length > 0) {
      return "burger"
    } else if (mealProtein.length === 0) {
      if (mealCheese === "yes") {
        return "grilled cheese"
      } else {
        return "toast"
      }
    } else if (mealVeggie.length > 0) {
      return "veggie sandwich"
    } else {
      return "toast"
    }
  } else if (mealBase === "tortilla") {
    if (mealProtein.includes("chicken") === true || mealProtein.includes("tofu") === true) {
      if (mealVeggie.includes("avocado") === true) {
        return "avocado ranch burrito"
      } else if (mealVeggie.includes("beans") === true || mealVeggie.includes("peppers") === true || mealVeggie.includes("onions") === true) {
        return "burrito"
      } else if (mealCheese === "yes") {
        return "protein quesadilla"
      } else {
        return "taco"
      }
    } else if (mealProtein.includes("beef") === true || mealProtein.includes("pork") === true) {
      if (mealVeggie.includes("beans") === true || mealVeggie.includes("peppers") === true || mealVeggie.includes("onions") === true) {
        return "burrito"
      } else if (mealCheese === "yes") {
        return "protein quesadilla"
      } else {
        return "taco"
      }
    } else if (mealProtein.includes("fish") === true) {
      return "taco"
    } else if (mealCheese === "yes") {
      return "cheese quesadilla"
    } else {
      return "no meal"
    }
  } else {
    if (mealProtein.length > 0) {
      if (mealVeggie.includes("greens") === true) {
        return "protein salad"
      } else if (mealVeggie.includes("carrots") === true || mealVeggie.includes("onions") === true || mealVeggie.includes("broccoli") === true || mealVeggie.includes("peppers") === true) {
        return "protein and veggies"
      } else {
        return "grilled protein"
      }
    } else {
      if (mealVeggie.includes("greens") === true) {
        return "salad"
      } else if (mealVeggie.includes("carrots") === true || mealVeggie.includes("onions") === true || mealVeggie.includes("broccoli") === true || mealVeggie.includes("peppers") === true) {
        return "grilled veggies"
      } else {
        return "no meal"
      }
    }
  }

//UI Logic
$(document).ready(function() {
  $("#next1").submit(function() {
    event.preventDefault();
    var userBase = $("#base").val();
    $("#user-base").text(userBase); // to push into sidebar
    $("#base-options").hide();
    $("#protein-options").show();
  });

  $("#next2").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=protein]:checked").each(function() {
      userProtein.push($(this).val());
    });
    $("#user-protein").text(userProtein); // to push into sidebar
    $("#protein-options").hide();
    $("#veggie-options").show();
  });

  $("#next3").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=veggie]:checked").each(function() {
      userVeggie.push($(this).val());
    });
    $("#user-veggie").text(userVeggie); // to push into sidebar
    $("#veggie-options").hide();
    $("#dairy-options").show();
  });

  $("form#meal-options").submit(function() {
    event.preventDefault();
    var userCheese = $("#cheese").val();
    $("#user-cheese").text(userCheese);
    $("#cheese-options").hide();

    var userMeal = new Meal (userBase, userProtein, userVeggie, userCheese);
    var recipe = userMeal.Recipe();

  });
});
