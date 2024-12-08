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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(); // Initialize the database here

const videoUploadInput = document.getElementById("youtube-link");
const uploadButton = document.getElementById("upload-button");

uploadButton.addEventListener("click", () => {
  const youtubeLink = videoUploadInput.value;

  if (!youtubeLink) {
    alert("Please enter a valid YouTube link.");
    return;
  }

  // Modified Regex to handle ?si parameter
  const youtubeId = youtubeLink.match(
    /(?:v=|vi=|embed\/|youtu.be\/)([a-zA-Z0-9-_]+)/,
  )[1];

  const newVideoRef = database.ref("videos").push();

  newVideoRef.set({
    url: youtubeId,
  });

  alert("Video successfully uploaded!");
  videoUploadInput.value = "";
});
