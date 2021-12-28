window.addEventListener('load',()=>{
  document.getElementById("themeswitcher").checked=false;
})


function theme(){
    var a = document.querySelector("body");
    var b = document.querySelector(".change");
    var c = document.getElementById("themeswitcher");
    if (c.checked ==true) {
        a.classList.add("dark");
    }
    else{
    a.classList.remove("dark");
    }
}

