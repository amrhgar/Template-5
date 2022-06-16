// Nav menu 

document.querySelector(".responsive button").onclick = function () {
    document.querySelector(".normal").style.display = "block"
    document.querySelector(".background-layout").style.display = "block"
}

// Nav Close-menu

document.querySelector(".normal .close-menu").onclick = function () {
    document.querySelector(".normal").style.display = "none"
    document.querySelector(".background-layout").style.display = "none"
}

document.querySelector(".background-layout").onclick = function () {
    document.querySelector(".normal").style.display = "none"
    document.querySelector(".background-layout").style.display = "none"
}


// Gallery PopUp

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach( img => {
    img.addEventListener("click" , (e) => {
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)

        let popupBox = document.createElement("div")
        popupBox.className = "popup-box"

        
        let popupImage = document.createElement("img")
        popupImage.src = img.src
        
        popupBox.appendChild(popupImage)
        document.body.appendChild(popupBox)
        
        if (img.alt !== null) {
            let imgHeading = document.createElement("h3")
            let imgText = document.createTextNode(img.alt)
            imgHeading.appendChild(imgText)
            popupBox.appendChild(imgHeading)
        }
        let closeButton = document.createElement("span")
        let closeButtonText = document.createTextNode("X")

        closeButton.appendChild(closeButtonText)

        closeButton.className = "close-button"

        popupBox.appendChild(closeButton)

        
    })
})

//document.querySelector(".popup-box").style.transform.scale = "1"


document.addEventListener("click" , function (e) {
    if (e.target.className == "close-button") {
        e.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove()
    }
    if (e.target.className == "popup-overlay") {
        e.target.remove()
        document.querySelector(".popup-box").remove()
    }
})



