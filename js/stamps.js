const stamps = [
    "./assets/circles.svg",
    "./assets/heart.svg",
    "./assets/moon.svg",
    "./assets/rainbow.svg",
    "./assets/shooting-star.svg",
    "./assets/waves.svg"
];

const stampsTag = document.querySelector("div.stamps")

let number = 0;

const addStamp = function(x, y) {
    // sample: <img src="circles.svg">
    const img = document.createElement("img")
    img.setAttribute("src", stamps[number])
    
    img.style.position = "absolute";
    
    // remove half window width so it's centered
    img.style.left = (x - window.innerWidth/2) + "px";
    img.style.top = y + "px";

    // attach to tag
    stampsTag.appendChild(img)

    // add some audio
    const audio = document.createElement("audio")
    audio.setAttribute("src","./assets/plop.mp3")
    audio.play()
    
    // index stamps
    number++;
    if (number > stamps.length - 1) {
        number = 0;
    }
}

document.addEventListener("click", function (event) {
    addStamp(event.pageX, event.pageY)
  })