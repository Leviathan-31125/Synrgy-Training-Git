let addingParagraph = document.getElementById("addingText")
let togle = true

function clickFunction () {
    if (togle) addingParagraph.innerHTML= "Heheheh, uji coba JS nih"
    else addingParagraph.innerHTML= ""

    togle = !togle
}
console.log(addingParagraph)
