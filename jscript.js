document.getElementById("button").addEventListener("click", function () {
    setInterval(function () {

        document.getElementById("button").style.backgroundColor = colorRandomBG()
        document.getElementById("button").style.boxShadow = ` 0px 0px 10px ${colorRandomBG()}`
        document.getElementById("content").style.backgroundColor = colorRandomBG()
        document.getElementById("Sidi").style.backgroundColor = colorRandomBG()

    }, 1000)
})
function colorRandom() {
    return Math.random() * 255
}
function colorRandomBG() {
    return `rgb(${colorRandom()},${colorRandom()},${colorRandom()})`
}