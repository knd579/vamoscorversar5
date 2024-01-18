var firebaseConfig = {
  apiKey: "AIzaSyD3uGT1rMI6VKbvJlBizrXfgYVJVchF6b0",
  authDomain: "chat-64ae6.firebaseapp.com",
  databaseURL: "https://chat-64ae6-default-rtdb.firebaseio.com",
  projectId: "chat-64ae6",
  storageBucket: "chat-64ae6.appspot.com",
  messagingSenderId: "657582083770",
  appId: "1:657582083770:web:8f7f235d43c5f70be4fc83"
};

  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}

  function getData() {
    firebase.database().ref("/"+room_name).on('value',function(snapshot){
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot){
        childKey = childSnapshot.key; childData = childSnapshot.val();
        if(childKey != "purpose"){
          firebase_message_id = childKey;
          message_data = childData;

          console.log(firebaseMessageId);
          console.log(messageData);

          name = messageData['name'];

          message = messageData['message'];

          like= messageData['like'];

          nameWithTag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
          
          messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";

          like_button = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";

          spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button>";

          row = nameWithTag + messageWithTag + like_button + spanWithTag;

          document.getElementById("output").innerHTML += row;

        } //quem inveto esse codigo é maluco 0-0
      })
    })
  }

    getData();

function updateLike(messageId){
  buttonId = messageId;
  likes = document.getElementById("buttonId").Value;
  updatedLikes = Number(likes) + 1;

  firebase.database().ref(roomName).child(messageId).update({
    like : updatedLikes
  });
}

function logout(){
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location.replace("index.html");
}