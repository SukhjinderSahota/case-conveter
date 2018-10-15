function upperCase() {
    var str = document.getElementById("textarea");
    //   let convertform = document.getElementById("convertForm");
    str.style.textTransform = "uppercase";

}

function lowerCase() {
    var str = document.getElementById("textarea");
    //  let convertform = document.getElementById("convertForm");
    str.style.textTransform = "lowercase";

}

function capitalize() {
    let str = document.getElementById("textarea");
    //   let convertform = document.getElementById("convertForm")
    str.style.textTransform = "capitalize";
}

function reset() {
    let str = document.getElementById("textarea");

    str.style.textTransform = "none";
}
