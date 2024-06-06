// var istatus = document.querySelectorAll("h5");
// var btn = document.querySelectorAll("#add");
// btn.forEach(function(e){
//     var btn2=console.log(e);
// })
// var check = 0;

// // var removeFriend = document.querySelector("#remove");

// btn2.addEventListener("click", function () {
//     if(check == 0){
//         istatus.innerHTML = "Friends";
//         istatus.style.color = "green";
//         btn.innerHTML="Remove Friend";
//         btn.style.backgroundColor="#dadada";
//         btn.style.color="#111";
//         check=1;
//     }
//     else{
//         istatus.innerHTML = "Stranger";
//         istatus.style.color = "red";
//         btn.innerHTML="Add Friend";
//         btn.style.backgroundColor="cadetblue";
//         btn.style.color="white";



//         check=0;
//     }
// });

var istatus = document.querySelectorAll("h5");
var btn = document.querySelectorAll("#add");
var check = 0;

btn.forEach(function(button, index) {
    button.addEventListener("click", function() {
        if (check == 0) {
            istatus[index].innerHTML = "Friends";
            istatus[index].style.color = "green";
            button.innerHTML = "Remove Friend";
            button.style.backgroundColor = "#dadada";
            button.style.color = "#111";
            check = 1;
        } else {
            istatus[index].innerHTML = "Stranger";
            istatus[index].style.color = "red";
            button.innerHTML = "Add Friend";
            button.style.backgroundColor = "cadetblue";
            button.style.color = "white";
            check = 0;
        }
    });
});


// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//   istatus.style.color = "red";
// })