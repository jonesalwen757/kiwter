const firebaseConfig = {
      apiKey: "AIzaSyCovLlSA9XFd7GC8eplhNjyIZVhBcYl0xU",
      authDomain: "kwitter-8767f.firebaseapp.com",
      projectId: "kwitter-8767f",
      storageBucket: "kwitter-8767f.appspot.com",
      messagingSenderId: "982921287379",
      appId: "1:982921287379:web:21795208a73b0eb48ee626",
      measurementId: "G-KY74EZ7TQN"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
