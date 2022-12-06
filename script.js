// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  





  // Differentiate past, present, and future
  var currentTime = dayjs().format('H');

  if (currentTime < 9) {
    document.getElementById("hour-9").classList.add("future");
  } else if (currentTime === 9 ) {
    document.getElementById("hour-9").classList.add("present");
  } else {
    document.getElementById("hour-9").classList.add("past");
  }
  
  if (currentTime < 10) {
    document.getElementById("hour-10").classList.add("future");
  } else if (currentTime === 10 ) {
    document.getElementById("hour-10").classList.add("present");
  } else {
    document.getElementById("hour-10").classList.add("past");
  }

  if (currentTime < 11) {
    document.getElementById("hour-11").classList.add("future");
  } else if (currentTime === 11 ) {
    document.getElementById("hour-11").classList.add("present");
  } else {
    document.getElementById("hour-11").classList.add("past");
  }

  if (currentTime < 12) {
    document.getElementById("hour-12").classList.add("future");
  } else if (currentTime === 12 ) {
    document.getElementById("hour-12").classList.add("present");
  } else {
    document.getElementById("hour-12").classList.add("past");
  }

  if (currentTime < 13) {
    document.getElementById("hour-1").classList.add("future");
  } else if (currentTime === 13 ) {
    document.getElementById("hour-1").classList.add("present");
  } else {
    document.getElementById("hour-1").classList.add("past");
  }

  if (currentTime < 14) {
    document.getElementById("hour-2").classList.add("future");
  } else if (currentTime === 14 ) {
    document.getElementById("hour-2").classList.add("present");
  } else {
    document.getElementById("hour-2").classList.add("past");
  }

  if (currentTime < 15) {
    document.getElementById("hour-3").classList.add("future");
  } else if (currentTime === 15 ) {
    document.getElementById("hour-3").classList.add("present");
  } else {
    document.getElementById("hour-3").classList.add("past");
  }

  if (currentTime < 16) {
    document.getElementById("hour-4").classList.add("future");
  } else if (currentTime === 16 ) {
    document.getElementById("hour-4").classList.add("present");
  } else {
    document.getElementById("hour-4").classList.add("past");
  }

  if (currentTime < 17) {
    document.getElementById("hour-5").classList.add("future");
  } else if (currentTime === 17 ) {
    document.getElementById("hour-5").classList.add("present");
  } else {
    document.getElementById("hour-5").classList.add("past");
  }
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  




  // Display the current date in the header of the page.
  var todayDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(todayDate);
  });
