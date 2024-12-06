const firebaseConfig = {
  apiKey: "AIzaSyAQq6fmdDJ3cIX5RaNEh6SaINxur-o6AJA",
  authDomain: "meine-webseite-32625.firebaseapp.com",
  databaseURL: "https://meine-webseite-32625-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meine-webseite-32625",
  storageBucket: "meine-webseite-32625.firebasestorage.app",
  messagingSenderId: "804422754196",
  appId: "1:804422754196:web:4013051a941b762f673981",
  measurementId: "G-75F8S9N9SY"
};
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const videoContainer = document.getElementById('video-container');

database.ref('videos').on('value', (snapshot) => {
  const videos = snapshot.val();
  videoContainer.innerHTML = ''; // Clear existing videos

  if (videos) {
    for (const videoId in videos) {
      const videoData = videos[videoId];
      const iframe = document.createElement('iframe');
      iframe.setAttribute('width', '560');
      iframe.setAttribute('height', '315');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoData.url}`);
      iframe.setAttribute('title', 'YouTube video player');
      videoContainer.appendChild(iframe);
    }
  } else {
    videoContainer.innerHTML = '<p>Keine Videos gefunden.</p>';
  }
});