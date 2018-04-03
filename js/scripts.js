//Business Logic
function Meal(base, protein, veggie, dairy) {
  this.base = base;
  this.protein = protein;
  this.veggie = veggie;
  this.dairy = dairy;
}

Meal.prototype.Creator = function() {
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
  $("form#meal-options").submit(function() {
    event.preventDefault();
    var userBase = $("#base").val();
    var userProtein = [];
    var userVeggie = [];
    var userDairy = [];
  });
});
