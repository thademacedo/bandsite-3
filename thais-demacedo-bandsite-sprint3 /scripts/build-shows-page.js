//API

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "shows_page";
  const apiUrl = "https://project-1-api.herokuapp.com/showdates";

  // Function to buy a ticket for an event
  function buyTicket(eventId) {
    console.log(`Buying ticket for event with ID: ${eventId}`);
  }

  fetch(`${apiUrl}?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      const eventsContainer = document.getElementById("eventsContainer");
      data.forEach((event) => {
        const eventElement = document.createElement("div");
        let dateformat = new Date(event.date);
        let datefinalformat = dateformat.toDateString();
        eventElement.innerHTML = `
          <p>Date: ${datefinalformat}</p>
          <p>Place: ${event.place}</p>
          <p>Location: ${event.location}</p>
          <button class="buy-ticket-button" data-event-id="${event.id}">Buy Ticket</button>
        `;
        console.log(event.date);
        eventsContainer.appendChild(eventElement);
      });

      // Add event listener for Buy Ticket buttons
      const buyTicketButtons = document.querySelectorAll(".buy-ticket-button");
      buyTicketButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const eventId = event.target.dataset.eventId;
          buyTicket(eventId);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });
});

// Get the audio element and the play button
const musicPlayer = document.getElementById("musicPlayer");
const playButton = document.getElementById("playButton");

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
let concerts = [];

// Function to create a concert row
function createConcertRow(concert) {
  // Create elements for concert row
  const row = document.createElement("div");
  row.classList.add("concert-row");
  const dateCell = document.createElement("div");
  dateCell.className = "concert-cell";
  const venueCell = document.createElement("div");
  venueCell.className = "concert-cell";
  const locationCell = document.createElement("div");
  locationCell.className = "concert-cell";

  // Set text content for concert row
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
  const concertsContainer = document.querySelector(".concerts");

  // Clear existing content
  concertsContainer.innerHTML = "";

  // Loop through concerts array and create rows
  concerts.forEach(function (concert) {
    const concertRow = createConcertRow(concert);
    concertsContainer.appendChild(concertRow);
  });
}

// Initial rendering of concerts
renderConcerts();
