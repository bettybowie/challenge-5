// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Clear all the notes when a new day starts
  if (currentTime === 0) {
    localStorage.clear();
  }

  // Click listeners to save the notes
  var saveBtn = document.querySelectorAll(".saveBtn");
  var textarea = document.querySelectorAll(".description");

  saveBtn[0].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("9am", textarea[0].value);
    document.getElementById("message").innerHTML = "Event(s) for 9am added to local storage!";
  })

  saveBtn[1].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("10am", textarea[1].value);
    document.getElementById("message").innerHTML = "Event(s) for 10am added to local storage!";
  })

  saveBtn[2].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("11am", textarea[2].value);
    document.getElementById("message").innerHTML = "Event(s) for 11am added to local storage!";
  })

  saveBtn[3].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("12pm", textarea[3].value);
    document.getElementById("message").innerHTML = "Event(s) for 12pm added to local storage!";
  })

  saveBtn[4].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("1pm", textarea[4].value);
    document.getElementById("message").innerHTML = "Event(s) for 1pm added to local storage!";
  })

  saveBtn[5].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("2pm", textarea[5].value);
    document.getElementById("message").innerHTML = "Event(s) for 2pm added to local storage!";
  })

  saveBtn[6].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("3pm", textarea[6].value);
    document.getElementById("message").innerHTML = "Event(s) for 3pm added to local storage!";
  })

  saveBtn[7].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("4pm", textarea[7].value);
    document.getElementById("message").innerHTML = "Event(s) for 4pm added to local storage!";
  })

  saveBtn[8].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("5pm", textarea[8].value);
    document.getElementById("message").innerHTML = "Event(s) for 5pm added to local storage!";
  })


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
  
  //Retrieve the data from local storage 
  textarea[0].value = localStorage.getItem("9am");
  textarea[1].value = localStorage.getItem("10am");
  textarea[2].value = localStorage.getItem("11am");
  textarea[3].value = localStorage.getItem("12pm");
  textarea[4].value = localStorage.getItem("1pm");
  textarea[5].value = localStorage.getItem("2pm");
  textarea[6].value = localStorage.getItem("3pm");
  textarea[7].value = localStorage.getItem("4pm");
  textarea[8].value = localStorage.getItem("5pm");

  // Display the current date in the header of the page.
  var todayDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(todayDate);
  });
