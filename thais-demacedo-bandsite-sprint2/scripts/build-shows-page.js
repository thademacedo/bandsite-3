/* 
- You must embed a song of your choice from SoundCloud using an iframe
- You must create the list of concerts using JavaScript DOM manipulation / flexbox layout.
1. You must have an array in JavaScript with all of concerts data and render the concerts HTML dynamically using the array data. It’s up to your discretion to decide on properties you create to represent all of the individual concert data.
2. All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
3. Utilize your knowledge of JavaScript DOM Manipulation and built in functions to create all the content between the hero image and the footer, as well as create your own functions as necessary. There should be no need to have any shows content housed within your html file for this section.
4. The individual rows of the Shows table will have different styling applied depending on the state of the table row. Utilize your knowledge of both JavaScript and Sass to accomplish this.
    * The individual rows of the Shows table need to have a hover state applied to them when a cursor is hovering over the table row, as per style guide. This can be done by utilizing a pseudo class within your Sass.
    * Additionally, clicking on an individual row should make that row "selected", applying a modifier CSS class via JavaScript. The row should stay “selected” until another row is clicked. Utilize your knowledge of both JavaScript and Sass to accomplish this.
5. Your styling will still be applied through your Sass files. Do not use the built in JavaScript DOM style method. */

// Get the audio element and the play button
var musicPlayer = document.getElementById("musicPlayer");
var playButton = document.getElementById("playButton");

// Function to play or pause the music
function toggleMusic() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playButton.textContent = "Pause Music";
  } else {
    musicPlayer.pause();
    playButton.textContent = "Play Music";
  }
}

// Add event listener to the play button
playButton.addEventListener("click", toggleMusic);

// Array to store concert data
var concerts = [
  // Concert data objects
];

// Function to create a concert row
function createConcertRow(concert) {
  // Create elements for concert row
  var row = document.createElement("div");
  row.className = "concert-row";
  var dateCell = document.createElement("div");
  dateCell.className = "concert-cell";
  var venueCell = document.createElement("div");
  venueCell.className = "concert-cell";
  var locationCell = document.createElement("div");
  locationCell.className = "concert-cell";

  // Set text content for concert row
  dateCell.textContent = concert.date;
  venueCell.textContent = concert.venue;
  locationCell.textContent = concert.location;

  // Append cells to row
  row.appendChild(dateCell);
  row.appendChild(venueCell);
  row.appendChild(locationCell);

  // Add event listener for row click
  row.addEventListener("click", function () {
    // Remove selected class from all rows
    var rows = document.querySelectorAll(".concert-row");
    rows.forEach(function (row) {
      row.classList.remove("selected");
    });

    // Add selected class to clicked row
    row.classList.add("selected");
  });

  // Return the concert row
  return row;
}

// Function to render concerts
function renderConcerts() {
  var concertsContainer = document.querySelector(".concerts");

  // Clear existing content
  concertsContainer.innerHTML = "";

  // Loop through concerts array and create rows
  concerts.forEach(function (concert) {
    var concertRow = createConcertRow(concert);
    concertsContainer.appendChild(concertRow);
  });
}

// Initial rendering of concerts
renderConcerts();