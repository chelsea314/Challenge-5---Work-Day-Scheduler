var today = moment();
$("#currentDay").text(today.format("llll"));

var timeBlockEl = $('#timeBlock')

var currentTime = today.format('hh:mm');
console.log(currentTime);



if (currentTime.getHours === currentHour && currentTime.getMinutes() === 0){
    // change the color of the timeblock
}

var date = new Date(); // Create Date object for a reference point
if(date.getHours() === 8 && date.getMinutes() === 0 && date.getSeconds() < 10){ // Check the time like above
   // Do stuff
}





// time blocks for standard business hours
// append a container for each hour
// past blocks are colored gray
// present block colored red
// future blocks colored green
// enter info on click to input
// input saves for that time block
// input remains in block even after a page refresh