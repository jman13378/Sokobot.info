if (getCookie("theme") == null) {
  console.log("lol");
  setCookie("theme", "dark", 7);
  document.getElementsByTagName("html")[0].style.backgroundColor = "#2c2f33";
} else {
  if (getCookie("theme") == "dark") {
    document.getElementsByTagName("html")[0].style.backgroundColor = "#2c2f33";
  } else if (getCookie("theme") == "light") {
    document.getElementsByTagName("html")[0].style.backgroundColor = "#2c2f33";
  } else if (getCookie("theme") == "custom") {
    document.getElementsByTagName("html")[0].style.backgroundColor = "#2c2f33";
  }
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
