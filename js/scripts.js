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
  $("#next1").click(function() {
    event.preventDefault();
    $("#base-options").hide();
    $("#protein-options").show();
  });

  $("#next2").click(function() {
    event.preventDefault();
    $("#protein-options").hide();
    $("#veggie-options").show();
  });

  $("#next3").click(function() {
    event.preventDefault();
    $("#veggie-options").hide();
    $("#dairy-options").show();
  });

  $("form#meal-options").submit(function() {
    event.preventDefault();
    $("#diary-options").hide();
    var userBase = $("#base").val();
    var userProtein = [];
    var userVeggie = [];
    var userDairy = [];
    $("input:checkbox[name=protein]:checked").each(function() {
      userProtein.push($(this).val());
    });
    $("input:checkbox[name=veggie]:checked").each(function() {
      userVeggie.push($(this).val());
    });
    $("input:checkbox[name=dairy]:checked").each(function() {
      userDairy.push($(this).val());
    });
  });
});
