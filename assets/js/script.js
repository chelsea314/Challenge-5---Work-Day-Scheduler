// Displays current date & local time in the header
var today = moment();
$("#currentDay").text(today.format("llll"));

// Assigns timeBlock div to a variable
var timeBlockEl = $('#timeBlock')

// // Creates div named RowEl
// var rowEl = $('<div>');

// // Adds row class to rowEl div
// rowEl.attr('class', 'row');

// // Creates div for hour column
// var hourEl = $('<div>');

// // Adds hour and column class to HourEl div
// hourEl.attr('class', 'hour');
// hourEl.addClass('col-2');

// // Creates input element
// var inputEl = $('<input>');

// // Adds description and column class to inputEl
// inputEl.attr('class', 'description');
// inputEl.addClass('col-8');

// // Creates Button
// var saveBtn = $('<button>');

// // Adds saveBtn and column class to saveBtn
// saveBtn.attr('class', 'saveBtn');
// saveBtn.addClass('col-2');
// saveBtn.text('Save')

// Array of business hours
var businessHours = [
    '9AM', 
    '10AM', 
    '11AM', 
    '12PM', 
    '1PM', 
    '2PM', 
    '3PM', 
    '4PM', 
    '5PM',
];

// // Appends hourEl, inputEl and SaveBtn to rowEl
// rowEl.append(hourEl, inputEl, saveBtn);
// // Appends rowEl to timeBlockEl
// timeBlockEl.append(rowEl);
// // Clones timeBlockEl and appends to body

// Repeats loop dependent on length of businessHours array
for (var i = 0; i < businessHours.length; i++) {
    // Creates div for hour column
    var hourEl = $('<div>');

    // Adds hour and column class to HourEl div
    hourEl.attr('class', 'hour');
    hourEl.addClass('col-2');

    // Creates input element
    var inputEl = $('<input>');

    // Adds description and column class to inputEl
    inputEl.attr('class', 'description');
    inputEl.addClass('col-8');

    // Creates Button
    var saveBtn = $('<button>');

    // Adds saveBtn and column class to saveBtn
    saveBtn.attr('class', 'saveBtn');
    saveBtn.addClass('col-2');
    saveBtn.text('Save')
    // Creates div named RowEl
    var rowEl = $('<div>');
    // Adds row class to rowEl div
    rowEl.attr('class', 'row');
    // Appends hourEl, inputEl and SaveBtn to rowEl
    rowEl.append(hourEl, inputEl, saveBtn);
    // Appends rowEl to timeBlockEl
    timeBlockEl.append(rowEl);
    // Sets text of hourEl to current index of array
    hourEl.text(businessHours[i]);
    // Calls function
    whatTimeIsIt();
    
};

 // Sets variable for current hour with '3PM' format
var currentHour = moment().format('hA')

// Determines color of inputEl based on current hour
function whatTimeIsIt() {
    console.log("businesshours: " + businessHours[i])
    if (currentHour == businessHours[i]){
        inputEl.addClass('present');
    } else {
        inputEl.addClass('past');
    }
};       


