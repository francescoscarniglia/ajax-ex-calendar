$(document).ready(function(){


    //var myDate = moment('2020-11-20');
    //console.log(myDate.format('DD dddd'));

    //quanti giorni devo stampare?
    //console.log('Giorni del mese: ',  //myDate.daysInMonth());

    //START EX.

    //punto di partenza
    var baseMonth = moment('2018-01-01');

    //init Handlebars
    var source = $('#day-template').html();
    var template = Handlebars.compile(source);

    // print giorno (con funzione)
    printMonth(template, baseMonth);

});//ready

// *******************************
// Function
// *******************************

//stampa a schermo

function printMonth(template, date) {
  // numeri giorni in un mese
  var daysInMonth = date.daysInMonth();

  //setta header
  $('h1').html(date.format('MMMM YYYY'));

}
