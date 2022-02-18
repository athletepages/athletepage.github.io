document.addEventListener("mousemove", (e) => {


    elm = document.getElementById("body")
    athlete = document.getElementById("athleteimage")

    setTimeout(() => {
        // elm.style.backgroundColor = "white"
        athlete.style.display = "none"
    }, 5)

    // elm.style.backgroundColor = "white"
    athlete.style.display = "none"

    xshift = Math.floor(Math.random() * (window.innerWidth));
    yshift = Math.floor(Math.random() * (window.innerHeight));


    if (Math.floor(Math.random() * 2) == 0) {
        xshift = -(xshift)
    }

    if (Math.floor(Math.random() * 2) == 0) {
        yshift = -(yshift)
    }

    setAthletePos(xshift, yshift)

    // elm.style.backgroundColor = "black"
    athlete.style.display = "block"


})

// background
document.addEventListener("mousemove", (e) => {


    elm = document.getElementById("body")


    setTimeout(() => {
        elm.style.backgroundColor = "white"
        athlete.style.display = "none"
    }, 1)

    elm.style.backgroundColor = "white"



    elm.style.backgroundColor = "black"



})

function setAthletePos(x, y) {
    athlete = document.getElementById("athleteimage")
    athlete.style.position = "absolute"
    athlete.style.left = x + "px"
    athlete.style.top = y + "px"
}