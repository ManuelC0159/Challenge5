// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour1 = $('#hour-13');
var hour2 = $('#hour-14');
var hour3 = $('#hour-15');
var hour4 = $('#hour-16');
var hour5 = $('#hour-17');
var date1 = dayjs().format('dddd, MMMM DD');
var hourATM = dayjs().format('H');
var timecomapre= 0;




$(function () {
    //on click of class savbtn, make variables that store user data and time
    //text being what user types(hence .description), time being what time it was saved for  
  $(".saveBtn").on('click', function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

//gets each time per ID. Split makes it from hour-x to [hour, x]. and we are only seding
//value 1, resulting in testTime =x
    /$(".time-block").each(function(){
        var testTime = ($(this).attr("id").split("-")[1]);
        console.log(testTime + " "+ hourATM);
        //compare to current time to add past, present, or future
        //if past workday
        if(hourATM > 17){
            $(this).removeClass('future');
            $(this).addClass('past');
            $(this).removeClass('present');               
        }
        //if in past
        else if(testTime < hourATM){
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
        //if in present
        else if(testTime == hourATM){
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        //if in future
        else if(testTime > hourATM){
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');           
        }
    })
   //reloads the value for description in each ID from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  });
  
  