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

//user interface logic

$(document).ready(function() {
   $("form#vacationideas").submit(function(event) {
    event.preventDefault();
    var vacationtype = parseInt($("#vacationtype").val());
    //alert(vacationtype);
    var placetogo = parseInt($("#placetogo").val());
    //alert(placetogo);
    var weathertype = parseInt($("#weathertype").val());
    //alert(weathertype);
    var daystogo = parseInt($("#daystogo").val());
    //alert(daystogo);
    var budget = parseInt($("#budget").val());
    //alert(budget);
    var result = vacationSuggestion(vacationtype, placetogo, weathertype, daystogo, budget);

    hideALLOptions();
    if (result>=5 && result<10) {
      //$('#vacation1').show();
      displaySuggestion('#vacation1');
    }
    else if (result>10 && result<=15) {
      //$('#vacation2').show();
      displaySuggestion('#vacation2');
    }
    else if (result>15 && result<18) {
      //$('#vacation3').show();
      displaySuggestion('#vacation3');
    }
    else if (result<=20){
      //$('#vacation4').show();
      displaySuggestion('#vacation4');
    }
    else {
      alert("Please make proper selection");
    }
  });

$("#btn-tryagain").click(function() {
  document.getElementById("vacationideas").reset();
  $('#vacationideas').show();
  $('#btn-tryagain').hide();
  hideALLOptions();
});
});
