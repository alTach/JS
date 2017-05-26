/*
  i don't try make effective algorithm i want to lear method appendChild() and
  practical other capabilities

*/

//create calendar
function createCalendar(id, year, month) {

      var elem = document.getElementById(id)
      elem.innerHTML = "";

      var date = new Date(year, month-1);
      
      //effectiv algoritm when you save all node in varible afted add to page, but 
      elem.appendChild(document.createElement('table'))
      elem = elem.firstChild

      for(var i=0, temp; i<6; i++){
        elem.appendChild(document.createElement('tr'))
        temp = elem.childNodes[i] 
        for(var j=0; j<7; j++){
          if( i != 0 ) {
            temp.appendChild(document.createElement('td'))
            if ( (date.getDay() == 0 && j==6) || date.getDay() == j+1) {
                if(month-1 == date.getMonth()) { 
                  temp.childNodes[j].innerHTML = date.getDate();
                  date.setDate( date.getDate() + 1 );
                }
            }
          // блок header
          } else {
            temp.appendChild(document.createElement('th'))
            temp.childNodes[0].innerHTML = "пн"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[1].innerHTML = "вт"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[2].innerHTML = "ср"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[3].innerHTML = "чт"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[4].innerHTML = "пт"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[5].innerHTML = "сб"
            temp.appendChild(document.createElement('th'))
            temp.childNodes[6].innerHTML = "вс"
            break;
          }
        }
      }
}

createCalendar('calendar', 2012, 9)