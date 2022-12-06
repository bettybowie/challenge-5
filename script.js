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
  var textarea = document.getElementsByTagName("textarea");

  saveBtn[0].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("9am", textarea[0].value);
  })

  saveBtn[1].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("10am", textarea[1].value);
  })

  saveBtn[2].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("11am", textarea[2].value);
  })

  saveBtn[3].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("12pm", textarea[3].value);
  })

  saveBtn[4].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("1pm", textarea[4].value);
  })

  saveBtn[5].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("2pm", textarea[5].value);
  })

  saveBtn[6].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("3pm", textarea[6].value);
  })

  saveBtn[7].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("4pm", textarea[7].value);
  })

  saveBtn[8].addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("5pm", textarea[8].value);
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
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  textarea[0].value = localStorage.getItem["9am"];
  textarea[1].value = localStorage.getItem["10am"];





  // Display the current date in the header of the page.
  var todayDate = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(todayDate);
  });
