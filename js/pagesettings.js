
var color = document.getElementsByName("color");
for (i = 0; i < color.length; i++) {
  if (ele[i].checked) setCookie("theme", ele[i].value, 7);
}


function setCookie(name, value, days) {
  var exipres = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 365 * 24 * 60 * 60);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + (value || "") + expires + "domain=.sokobot.info; Path=/";
}
window.onload = function load() {
  if (getCookie("theme") == null) {
    console.log("lol");
    setCookie("theme", "dark", 7);
    document.getElementById(getCookie("theme")).checked = true;
  } else {
    console.log(getCookie("theme"));
    document.getElementById(getCookie("theme")).checked = true;
  }
};

function getCookie(name) {
  var NameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    console.log("lo1l");
    if (c.indexOf(NameEQ) == 0) return c.substring(NameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/ Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
