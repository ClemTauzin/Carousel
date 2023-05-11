const container = document.querySelector(".container")
const fright = document.querySelector(".right")
const fleft = document.querySelector(".left")

let carousel =["carousel1", "carousel2", "carousel3"];
let nbr = 1;
fright.addEventListener("click", () => {
    if (nbr<carousel.length) {
        nbr++;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    }else{
        nbr=1;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    } 
});
fleft.addEventListener("click", () => {
    if (nbr>1) {
        nbr--;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    }else{
        nbr=carousel.length;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    } 
});
setInterval(() => {
    if (nbr<carousel.length) {
        nbr++;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    }else{
        nbr=1;
        container.style.backgroundImage = "url('img/Carousel"+nbr+".jpg')";
    }  
}, 5000);
