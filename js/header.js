const headerTag = document.querySelector("header")

//when we scroll the page, at a certain point (80px, toggle class to header)
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;
    if (pixels > 80) {
        headerTag.classList.add("scrolled")
    } else {
        headerTag.classList.remove("scrolled")
    }
})

// const minimizeHeader = function () {
//     const pixels = window.pageYOffset;
//     let alpha = Math.max( 1 / (pixels * 100), 160);
//     console.log(alpha)
//     headerTag.style.width = alpha;
// }


