//backend logic for the functions

var vacationSuggestion = function(vacationtype1, placetogo1, weathertype1, daystogo1, budget1) {
    return vacationtype1 + placetogo1 + weathertype1 + daystogo1 + budget1;
}

var hideALLOptions = function() {
  $('#vacation1').hide();
  $('#vacation2').hide();
  $('#vacation3').hide();
  $('#vacation4').hide();
}

var displaySuggestion = function(placeId) {
  $(placeId).show();
  $('#btn-tryagain').show();
  $('#vacationideas').hide();
}
