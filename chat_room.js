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

function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function AddRoom(){
    room_name = document.getElementById("nomeDaSala").value;

    firebase.datebase().ref("/").child(room_name).update({
        purpose : "Adicionando nome da Sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html"
}
function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapShot){
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Nome da Sala" + Room_name)
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html"
}

