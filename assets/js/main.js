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

    //ottieni festività mese corrente
    printHoliday(baseMonth);

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

  }

}

//ottieni e stampa festività
function printHoliday(date) {
  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/holidays',
    method: 'GET',
    data : {
      year : date.year(),
      month: date.month()
    },
    success : function(res){

      var holidays = res.response;
      for(var i = 0; i < holidays.length; i++) {
          //elemento attuale durante il for
          var thisHoliday = holidays[i];

          var listItem = $('li[data-complete-date=" ' + thisHoliday.date +' "]');

          if(listItem){
            listItem.addClass('holiday');
            listItem.text( listItem.text() + ' - ' + thisHoliday.name );
          }

      }
    },
    error : function(res){
      console.log('ERROR');
    }
  });
}
