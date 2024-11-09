// Function to start the opening ceremony and initialize the scores
function OpeningCeremony(callback) {
  console.log("Opening ceremony started!");

  // Initialize scores for each team color
  let scores = { Red: 0, Blue: 0, Green: 0, Yellow: 0 };
  console.log("Scores initialized:", scores);

  // Start the first event, Race100M, passing scores and the next callback
  callback(scores, Race100M);
}

// Function for the 100m race event
function Race100M(scores, callback) {
  // Randomly generate times for each team in the race
  let times = {
    Red: Math.floor(Math.random() * 10 + 1),
    Blue: Math.floor(Math.random() * 10 + 1),
    Green: Math.floor(Math.random() * 10 + 1),
    Yellow: Math.floor(Math.random() * 10 + 1),
  };
  console.log("Race 100m times:", times);

  // Sort players based on their times (ascending order)
  let sortedPlayers = Object.keys(times).sort((a, b) => times[a] - times[b]);

  // Allocate points based on finishing position
  scores[sortedPlayers[0]] += 10;
  scores[sortedPlayers[1]] += 8;
  scores[sortedPlayers[2]] += 5;
  scores[sortedPlayers[3]] += 2;
  console.log("Scores after Race100M:", scores);

  // Proceed to the next event, Long Jump
  callback(scores, longJump);
}

// Function for the Long Jump event
function longJump(scores, callback) {
  console.log("Long Jump started");

  // List of colors (team names)
  let colors = ["Red", "Blue", "Green", "Yellow"];

  // Randomly select a winner for the Long Jump event
  let winner = colors[Math.floor(Math.random() * colors.length)];
  scores[winner] += 10;
  console.log(`LongJump winner: ${winner}`);
  console.log("Scores after LongJump:", scores);

  // Proceed to the next event, High Jump
  callback(scores, HighJump);
}

// Function for the High Jump event
function HighJump(scores, callback) {
  console.log("HighJump started!");

  // Prompt user for input on which color (team) achieved the highest jump
  let userColor = prompt("Enter the color for the highest jump:");
  if (userColor && scores[userColor] !== undefined) {
    scores[userColor] += 10;
  } else {
    console.log("Event was skipped due to invalid color");
  }

  console.log("Scores after HighJump:", scores);

  // Proceed to the Award Ceremony
  callback(scores, AwardCeremony);
}

// Function for the Award Ceremony to announce the results
function AwardCeremony(scores) {
  console.log("Award Ceremony!");

  // Sort players by their scores in descending order
  let sortedPlayers = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

  // Display sorted scores in descending order
  let sortedScores = sortedPlayers.map((player) => [player, scores[player]]);
  console.log("Final Scores:", sortedScores);

  // Announce the winner with the highest score
  console.log(
    `Winner is ${sortedScores[0][0]} with ${sortedScores[0][1]} points!`
  );
}

// Start the ceremony and chain the events
OpeningCeremony(Race100M);
