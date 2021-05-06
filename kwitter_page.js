var firebaseConfig = {
    apiKey: "AIzaSyBcQtS25RNoAtkTuRnGKPe-z56zl9m_hs8",
    authDomain: "kwitter-app-f528a.firebaseapp.com",
    databaseURL: "https://kwitter-app-f528a-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-f528a",
    storageBucket: "kwitter-app-f528a.appspot.com",
    messagingSenderId: "1011551703490",
    appId: "1:1011551703490:web:7f052634591007d2ccc65b"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       //write code here

    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
 }