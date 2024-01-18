function addUser()
{
    user_name = document.getElementById("user_name").value;
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



