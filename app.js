document.addEventListener("keyup",myFunction,false)

function myFunction(key){                  
    if (key.keyCode == "49"){        // Test using either 1 or 2 instead of + or -          
    var balloon = document.getElementById("balloon")
    var fontSize = window.getComputedStyle(balloon,null).getPropertyValue('font-size')
    var size = parseFloat(fontSize)
        if (size < 60){
            document.getElementById("balloon").style.fontSize = (size + 15) + 'px'
        }
        else {
            document.getElementById("balloon").innerHTML = "💥"
            document.removeEventListener("keydown",myFunction)
        }       
    }
    else if(key.keycode == "50")
    var balloon = document.getElementById("balloon")
    var fontSize = window.getComputedStyle(balloon,null).getPropertyValue('font-size')
    var size = parseFloat(fontSize)
        if (size > 15){
            document.getElementById("balloon").style.fontSize = (size - 15) + 'px'
        }
        else {
            document.getElementById("balloon").innerHTML = "done"
            document.removeEventListener("keydown",myFunction)
        }
    }   
