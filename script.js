// Constructor
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// Prototype Method
Place.prototype.fullDetails = function() {
  return (
    "Location: " + this.location +
    "\nLandmarks: " + this.landmarks +
    "\nTime of Year: " + this.timeOfYear +
    "\nNotes: " + this.notes
  );
};

// Create Place Objects
const malindi = new Place(
  "Malindi",
  "Vasco da Gama Pillar",
  "December",
  "Hot and relaxing beach vibes"
);

const shanzu = new Place(
  "Shanzu",
  "Beach Resorts",
  "January",
  "Calm and breezy"
);

const diani = new Place(
  "Diani",
  "Diani Beach",
  "August",
  "Beautiful white sands"
);

const doha = new Place(
  "Doha",
  "Museum of Islamic Art",
  "March",
  "Modern architecture and desert climate"
);

const washington = new Place(
  "Washington",
  "White House",
  "April",
  "Historic landmarks and monuments"
);

const places = [malindi, shanzu, diani, doha, washington];
//UI logic
document.addEventListener("DOMContentLoaded", function() {
  const placesList = document.getElementById("visitedPlaces");
  const detailsOutput = document.getElementById("placeDetails");

  places.forEach(function(place) {
    const li = document.createElement("li");
    li.textContent = place.location;

    li.addEventListener("click", function() {
      detailsOutput.textContent = place.fullDetails();
    });

    placesList.appendChild(li);
  });
});
