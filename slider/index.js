
let sli = document.getElementsByClassName("sli");

let slides = document.getElementById("slides");

let slidenum = 0;

function next(){

      
        if(slidenum < sli.length-1){
            slidenum++;
         }

    else {
        slidenum =0;
    }

    slides.style.transform = `translateX(${-600*slidenum}px)`;
    
}
function prev(){


    slides.style.transform = `translateX(${600*slidenum}px)`;
    
}


