function check() {
    let b = document.getElementsByClassName("cover")[0].style.display;
    let d = document.getElementById("si").style.display;
    if (b == "block" && d == "block") {
        document.getElementsByClassName("cover")[0].style.display = "none";
        document.getElementById("si").style.display = "none";
    }
}
function dispSignIn() {
    document.getElementsByClassName("cover")[0].style.display = "block";
    document.getElementById("si").style.display = "block";
}
function dis() {
    let menu = document.getElementById("lis2");
    let form = document.getElementById("si");
    var selectedValue = menu.options[menu.selectedIndex].value;
    if (selectedValue == "std") {
        form.action = "Student.html";
    } else if (selectedValue == "tch") {
        form.action = "Teacher.html";
    }
}
function resp() {
    document.getElementById("when").style.display = "block";
}