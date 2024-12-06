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

// Initialisiere Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Hole das Upload-Formular und den Upload-Button
const videoUploadInput = document.getElementById("video-upload");
const uploadButton = document.getElementById("upload-button");

// Event-Listener für den Upload-Button
uploadButton.addEventListener("click", () => {
  // Hole die Video-Datei
  const file = videoUploadInput.files[0];

  // Überprüfe, ob eine Datei ausgewählt wurde
  if (!file) {
    alert("Bitte wähle ein Video aus.");
    return;
  }

  // Lade das Video auf Firebase Storage hoch (mithilfe eines temporären Upload-Dienstes)
  // ... (Code für den Upload auf Firebase Storage)

  // Erstelle einen neuen Datensatz in der Realtime Database
  const newVideoRef = database.ref("videos").push();

  // Hole die Download-URL des hochgeladenen Videos von Firebase Storage
  // ... (Code für das Abrufen der Download-URL)

  // Speichere die Download-URL in der Realtime Database
  newVideoRef.set({
    url: downloadURL,
  });

  // Zeige eine Bestätigung an
  alert("Video erfolgreich hochgeladen!");

  // Lösche das Upload-Formular, um für den nächsten Upload bereit zu sein
  videoUploadInput.value = "";
});
