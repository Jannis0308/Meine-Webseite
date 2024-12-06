// admin.js
const firebaseConfig = {
  apiKey: "AIzaSyAQq6fmdDJ3cIX5RaNEh6SaINxur-o6AJA",
  authDomain: "meine-webseite-32625.firebaseapp.com",
  databaseURL:
    "https://meine-webseite-32625-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meine-webseite-32625",
  storageBucket: "meine-webseite-32625.firebasestorage.app",
  messagingSenderId: "804422754196",
  appId: "1:804422754196:web:4013051a941b762f673981",
  measurementId: "G-75F8S9N9SY",
};

// ... initialize Firebase ...

const videoUploadInput = document.getElementById("youtube-link"); // Get the YouTube link input
const uploadButton = document.getElementById("upload-button");

uploadButton.addEventListener("click", () => {
  const youtubeLink = videoUploadInput.value;

  // Check if a YouTube link is provided
  if (!youtubeLink) {
    alert("Please enter a valid YouTube link.");
    return;
  }

  // Extract the YouTube video ID using a regex
  const youtubeId = youtubeLink.match(/(?:v=|vi=|embed\/)([a-zA-Z0-9-_]+)/)[1]; // Extract the video ID

  // Create a new reference in the database
  const newVideoRef = database.ref("videos").push();

  // Save the YouTube ID to the database
  newVideoRef.set({
    url: youtubeId,
  });

  alert("Video successfully uploaded!");
  videoUploadInput.value = ""; // Clear the input field
});
