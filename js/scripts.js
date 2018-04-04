//Business Logic
var userProtein = [];
var userVeggie = [];
var userDairy = [];

function Meal(base, protein, veggie, dairy) {
  this.base = base;
  this.protein = protein;
  this.veggie = veggie;
  this.dairy = dairy;
}

Meal.prototype.Recipe = function() {
  var mealBase = this.base;
  var mealProtein = this.protein;
  var mealVeggie = this.veggie;
  var mealDairy = this.dairy;

  if (mealBase === "pasta") {

  } else if (mealBase === "rice") {

  } else if (mealBase === "bread") {

  } else if (mealBase === "tortilla") {

  } else {

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
    $("input:checkbox[name=dairy]:checked").each(function() {
      userDairy.push($(this).val());
    });
    $("#user-dairy").text(userDairy);
    $("#diary-options").hide();

    var userMeal = new Meal (userBase, userProtein, userVeggie, userDairy);
    var recipe = userMeal.Recipe();

  });
});
