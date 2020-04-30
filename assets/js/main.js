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

  // imposta data atttribute (visualizzarela data)
  $('.month').attr('data-this-date', date.format('YYYY-MM-DD'));

  // genera giorni mese
  for ( var i= 0; i < daysInMonth; i++){
    // genera data con moment js
    var thisDate = moment({
      year : date.year(),
      month : date.month(),
      day : i +1
    });

    // imposta dati template
    var context = {
      class : 'day',
      day : thisDate.format('DD dddd'),
      completeDate : thisDate.format('YYYY-MM-DD')
    };

    // compilare e aggiungere i template
    var html = template(context);
    $('.month-list').append(html);
    console.log(html);
  }

}
