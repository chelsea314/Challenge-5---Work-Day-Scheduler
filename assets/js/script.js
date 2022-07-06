// Displays current date & local time in the header
var today = moment();
$("#currentDay").text(today.format("llll"));

// Sets variable for current hour with '3PM' format
var currentHour = moment().format('hA')

// Assigns timeBlock div to a variable
var timeBlockEl = $('#timeBlock')

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

// Assigns each time a numeric value
var timeNumbers = {
    '12AM': 0,
    '1AM': 1,
    '2AM': 2,
    '3AM': 3,
    '4AM': 4,
    '5AM': 5,
    '6AM': 6,
    '7AM': 7,
    '8AM': 8,
    '9AM': 9, 
    '10AM': 10, 
    '11AM': 11, 
    '12PM': 12, 
    '1PM': 13, 
    '2PM': 14, 
    '3PM': 15, 
    '4PM': 16, 
    '5PM': 17,
    '6PM': 18,
    '7PM': 19,
    '8PM': 20,
    '9PM': 21,
    '10PM': 22,
    '11PM': 23,
};

// Repeats loop dependent on length of businessHours array
for (var i = 0; i < businessHours.length; i++) {
    // Sets businessHour variable to the current index of array
    var businessHour = businessHours[i];

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

    // Assigns inputId to businessHour
    var inputId = 'input_' + businessHour;

    // Assigns ID to inputEl
    inputEl.attr('id', inputId);

    // Assigns data/value of businessHour to the inputEl
    inputEl.attr('data-hour', businessHour);

    // Contents of input are assumed empty
    var inputContents = '';

    // Retrieves data from local storage 
    try {
        inputContents = localStorage.getItem(`task.${businessHour}`) || '';
    } catch (e) {
        console.error(e);
    };

    // Assigns the data from local Storage to the inputEl
    inputEl.val(inputContents);

    // Creates Button
    var saveBtn = $('<button>');

    // Adds saveBtn and column class to saveBtn; Assigns the data of saveBtn to inputID - current business hour
    saveBtn.attr('class', 'saveBtn');
    saveBtn.attr('data-input', inputId);
    saveBtn.addClass('col-2');
    saveBtn.text('Save');

    // Creates click listener for save btn, sends to saveToLocal function
    saveBtn.on('click', saveToLocal)

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
    addTimeClass();
};


// Determines color of inputEl based on current hour 
function addTimeClass(businessHour, currentHour) { 
    // Sets variables to indexes from the timeNumbers array based on current hour and business hour
    var businessHourVal = timeNumbers[businessHours[i]]
    var currentHourVal = timeNumbers[currentHour];
    
    if (currentHourVal === businessHourVal){
        inputEl.addClass('present');
    } else if (currentHourVal < businessHourVal) {
        inputEl.addClass('future');
    } else {
        inputEl.addClass('past')
    }
};       
   
// Saves input to local storage
function saveToLocal(e) {
    // Event target set on saveBtn to determine which saveBtn was clicked
    var saveBtn = e.target;
    // Assigns inputID variable to targeted saveBtn with data-input attribute
    var inputId = $(saveBtn).attr('data-input');
    // Assins variable to Ids of inputID
    var $input = $('#' + inputId);
    // Assigns taskContent variable to be the value of $input
    var taskContent = $input.val();
    // Sets hour variable to $input with data-hour attribute
    var hour = $input.attr('data-hour');
    // Sets key and value and saves to local storage
    localStorage.setItem(`task.${hour}`, taskContent);
};