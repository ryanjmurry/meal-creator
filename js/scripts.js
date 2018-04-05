//Business Logic
var userProtein = [];
var userVeggie = [];

function Meal(base, protein, veggie, cheese) {
  debugger;
  this.base = base;
  this.protein = protein;
  this.veggie = veggie;
  this.cheese = cheese;
}

Meal.prototype.Recipe = function () {
  debugger;
  var mealBase = this.base;
  var mealProtein = this.protein;
  var mealVeggie = this.veggie;
  var mealCheese = this.cheese;

  if (mealBase === "pasta") {
    if (mealProtein.includes(" beef") === true) {
      return "meatballs"
    } else if (mealProtein.includes(" pork") === true || mealProtein.includes(" chicken") === true || mealProtein.includes(" tofu") === true) {
      return "ramen"
    } else if (mealVeggie.includes(" carrots") === true || mealVeggie.includes(" onions") === true || mealVeggie.includes(" broccoli") === true || mealVeggie.includes(" peppers") === true) {
      return "veggie pasta"
    } else {
      return "no meal"
    }
  } else if (mealBase === "zoodles") {
    if (mealProtein.includes(" beef") === true) {
      return "meatballs"
    } else if (mealProtein.includes(" pork") === true || mealProtein.includes(" chicken") === true || mealProtein.includes(" tofu") === true) {
      if (mealVeggie.includes(" carrots") === true || mealVeggie.includes(" onions") === true || mealVeggie.includes(" broccoli") === true || mealVeggie.includes(" peppers") === true) {
        return "veggie pasta"
      } else {
        return "protein pasta"
      }
    } else {
      return "no meal"
    }
  } else if (mealBase === "rice") {
    if (mealProtein.includes(" beef") === true || mealProtein.includes(" pork") === true || mealProtein.includes(" chicken") === true || mealProtein.includes(" tofu") === true) {
      if (mealVeggie.includes(" carrots") === true || mealVeggie.includes(" onions") === true || mealVeggie.includes(" broccoli") === true || mealVeggie.includes(" peppers") === true) {
        return "teriyaki veggie bowl"
      } else {
        return "teriyaki protein bowl"
      }
    } else if (mealProtein.includes(" fish") === true) {
      if (mealVeggie.includes(" avocado") === true) {
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
    if (mealProtein.includes(" chicken") === true || mealProtein.includes(" tofu") === true) {
      if (mealVeggie.includes(" avocado") === true) {
        return "avocado ranch burrito"
      } else if (mealVeggie.includes(" beans") === true || mealVeggie.includes(" peppers") === true || mealVeggie.includes(" onions") === true) {
        return "burrito"
      } else if (mealCheese === "yes") {
        return "protein quesadilla"
      } else {
        return "taco"
      }
    } else if (mealProtein.includes(" beef") === true || mealProtein.includes(" pork") === true) {
      if (mealVeggie.includes(" beans") === true || mealVeggie.includes(" peppers") === true || mealVeggie.includes(" onions") === true) {
        return "burrito"
      } else if (mealCheese === "yes") {
        return "protein quesadilla"
      } else {
        return "taco"
      }
    } else if (mealProtein.includes(" fish") === true) {
      return "taco"
    } else if (mealCheese === "yes") {
      return "cheese quesadilla"
    } else {
      return "no meal"
    }
  } else {
    if (mealProtein.length > 0) {
      if (mealVeggie.includes(" greens") === true) {
        return "protein salad"
      } else if (mealVeggie.includes(" carrots") === true || mealVeggie.includes(" onions") === true || mealVeggie.includes(" broccoli") === true || mealVeggie.includes(" peppers") === true) {
        return "protein and veggies"
      } else {
        return "grilled protein"
      }
    } else {
      if (mealVeggie.includes(" greens") === true) {
        return "salad"
      } else if (mealVeggie.includes(" carrots") === true || mealVeggie.includes(" onions") === true || mealVeggie.includes(" broccoli") === true || mealVeggie.includes(" peppers") === true) {
        return "grilled veggies"
      } else {
        return "no meal"
      }
    }
  }
};

//UI Logic
$(document).ready(function() {
  $("form#base-select").submit(function() {
    event.preventDefault();
    debugger;
    $("#base-select").hide();
    $("#protein-select").show();
    var userBase = $("#base").val();
    $("#user-base").text(userBase); // to push into sidebar

    $("#protein-select").submit(function() {
      event.preventDefault();
      debugger;
      $("input:checkbox[name=protein]:checked").each(function() {
        userProtein.push($(this).val());
      });
      $("#user-protein").text(userProtein); // to push into sidebar
      $("#protein-select").hide();
      $("#veggie-select").show();

      $("#veggie-select").submit(function() {
        event.preventDefault();
        $("input:checkbox[name=veggie]:checked").each(function() {
          userVeggie.push($(this).val());
        });
        $("#user-veggie").text(userVeggie); // to push into sidebar
        $("#veggie-select").hide();
        $("#cheese-select").show();

        $("#cheese-select").submit(function() {
          event.preventDefault();
          debugger;
          var userCheese = $("#cheese").val();
          $("#user-cheese").text(userCheese);
          $("#cheese-select").hide();
          var userMeal = new Meal (userBase, userProtein, userVeggie, userCheese);
          console.log(userMeal);
          var recipe = userMeal.Recipe();
          console.log(recipe);
          $("#reset").show();
          debugger;
          if (recipe === "avocado ranch burrito") {
            $("#avocado-ranch-burrito").show();
          } else if (recipe === "burger") {
            $("#burger").show();
          } else if (recipe === "burrito") {
            $("#burrito").show();
          } else if (recipe === "cheese quesadilla") {
            $("#cheese-quesadilla").show();
          } else if (recipe === "grilled cheese") {
            $("#grilled-cheese").show();
          } else if (recipe === "grilled protein") {
            $("#grilled-protein").show();
          } else if (recipe === "grilled veggies") {
            $("#grilled-veggies").show();
          } else if (recipe === "meatballs") {
            $("#meatballs").show();
          } else if (recipe === "no meal") {
            $("#no-meal").show();
          } else if (recipe === "protein and veggies") {
            $("#protein-and-veggies").show();
          } else if (recipe === "protein pasta") {
            $("#protein-pasta").show();
          } else if (recipe === "protein quesadilla") {
            $("#protein-quesadilla").show();
          } else if (recipe === "protein salad") {
            $("#protein-salad").show();
          } else if (recipe === "ramen") {
            $("#ramen").show();
          } else if (recipe === "salad") {
            $("#salad").show();
          } else if (recipe === "sushi avocado") {
            $("#sushi-avocado").show();
          } else if (recipe === "sushi") {
            $("#sushi").show();
          } else if (recipe === "taco") {
            $("#taco").show();
          } else if (recipe === "teriyaki protein bowl") {
            $("#teriyaki-protein-bowl").show();
          } else if (recipe === "teriyaki veggie bowl") {
            $("#teriyaki-veggie-bowl").show();
          } else if (recipe === "toast") {
            $("#toast").show();
          } else if (recipe === "veggie pasta") {
            $("#veggie-pasta").show();
          } else {
            $("#veggie-sandwich").show();
          }
        });
      });
    });
  });
});
