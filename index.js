function showCourse() {
    document.getElementsByClassName("crs")[0].style.display = "block";
    document.getElementsByClassName("cover")[0].style.display = "block";
}
function check() {
    let b = document.getElementsByClassName("cover")[0].style.display;
    let a = document.getElementsByClassName("crs")[0].style.display;
    let c = document.getElementById("su").style.display;
    let d = document.getElementById("si").style.display;
    if (b == "block" && (a == "block" || c == "block" || d == "block")) {
        document.getElementsByClassName("cover")[0].style.display = "none";
        if (a == "block") {
            document.getElementsByClassName("crs")[0].style.display = "none";
        } else if (c == "block") {
            document.getElementById("su").style.display = "none";
        } else {
            document.getElementById("si").style.display = "none";
        }
    }
}
let bb = document.getElementById("num");
let aa = document.getElementsByClassName("inc");
let first = false;
window.onscroll = function () {
    if (parseInt(window.scrollY) >= parseInt(bb.offsetTop) - 100) {
        if (!first) {
            for (element of aa) {
                play(element);
            }
        }
        first = true;
    }
};
function play(element) {
    let gg = element.dataset.goal;
    let cc = setInterval(() => {
        element.textContent++; if (element.textContent == gg) { clearInterval(cc); }
    }, 1000 / gg);
}
function resp() {
    document.getElementById("when").style.display = "block";
}
function dispSignUp() {
    document.getElementsByClassName("cover")[0].style.display = "block";
    document.getElementById("su").style.display = "block";
}
function dispSignIn() {
    document.getElementsByClassName("cover")[0].style.display = "block";
    document.getElementById("si").style.display = "block";
}
function vali() {
    let msg = "";
    let form = document.forms[1];
    if (form.elements["fname"].value.trim().length == 0) {
        msg += "First name is empty" + "\r\n";
    }
    if (form.elements["lname"].value.trim().length == 0) {
        msg += "Last name is empty" + "\r\n";

    }
    if (form.elements["email"].value.trim().length == 0) {
        msg += "Email is empty" + "\r\n";
    }
    if (form.elements["pass"].value.length == 0) {
        msg += "Password is empty" + "\r\n";
    }
    if (form.elements["pass"].value.length != 8) {
        msg += "Password should be 8 characters" + "\r\n";
    }
    if (form.elements["passCon"].value.length == 0) {
        msg += "Password not confirmed" + "\r\n";
    }
    if (form.elements["pass"].value != form.elements["passCon"].value) {
        msg += "Password isn't confirmed correctly" + "\r\n";
    }
    if (form.elements["phone"].value.length == 0) {
        msg += "Phone number is empty" + "\r\n";
    }
    if (form.elements["phone"].value.length != 11) {
        msg += "Phone should be 11 digits." + "\r\n";
    }
    let arr = new Array();
    for (let i = 0; i <= 9; ++i) {
        arr[i] = i.toString();
    }
    let ccc = form.elements["phone"].value;
    for (element of ccc) {
        if (!arr.includes(element)) {
            msg += "Phone should contain numbers only" + "\r\n";
            break;
        }
    }
    if (form.elements["add"].value.trim().length == 0) {
        msg += "Address is empty" + "\r\n";
    }

    let val = form.elements["pass"].value;
    let dig = false;
    let wha = false;
    let up = true;
    let spe = false;
    for (let i = 0; i < val.length; ++i) {

        if (arr.includes(val[i]) && i == 0) up = false
        else if (arr.includes(val[i]) && i != 0) dig = true;
    }
    for (let i = 0; i < val.length; ++i) {
        if ((i == 0 && val[i] == ' ') || (i == 0 && val[i] != val[i].toUpperCase())) {
            up = false;
        }
        if (val[i] == ' ') {
            wha = true;
        }
        if (val[i] == '-' || val[i] == '_' || val[i] == '#' || val[i] == '&' || val[i] == '*') {
            spe = true;
        }
    }
    if (!up) {
        msg += "The password must start with a capital letter. " + "\r\n";
    }
    if (!dig) {
        msg += "The password must contain at least one digit. " + "\r\n";
    }
    if (wha) {
        msg += "The password shouldn't contain white spaces. " + "\r\n";
    }
    if (!spe) {
        msg += "The password must contain at least one character of the following: -,_,#, &, and *";
    }
    if (msg.length != 0) {
        alert(msg);
        return false;
    }
    return true;
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