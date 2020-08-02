
function fadeFunc(number){
    if(number == 1){
        $("#li_menu1").fadeToggle(300);
    }
    else if(number == 2){
        $("#li_menu2").fadeToggle(300);
    }
    else if(number == 3){
        $("#li_menu3").fadeToggle(300);
    }
}

function redirect(page){
    if(page == 'calc'){
        location.href = "calculator.html"
    }
    else if(page == 'snake'){
        location.href = "snake.html"
    }
}