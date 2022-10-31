let isMobile;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|NetCast|SMART-TV|SmartTV/i.test(navigator.userAgent)) {
    
    isMobile = true;
} else {
    isMobile = false;
}

//By Romeo#0700
if (isMobile == true) moveToMobile();

function moveToMobile() {
    let nav = document.getElementById('nav');
    let navdiv = document.getElementById('navtext-div');
    let navtext = document.getElementById('navtext');
    let logomain = document.getElementById('logo-main-1');
    let mainbuttons = document.getElementById('main-buttons');
    let mainbuttons2 = document.getElementById('main-buttons-2');
    let mainbuttonss = document.getElementById('main-buttonss');

    let mainbutton2 = document.getElementById('main-button-2')
    let mainbutton3 = document.getElementById('main-button-4')
    let info = document.getElementById('main-info-1');
    let info2 = document.getElementById('main-info-2');
    
    let footersupport = document.getElementById('footer-support');
    footersupport.style.display = "grid";

    nav.style.padding = "50px 0 50px";
    navdiv.style.justifyContent = "none";
    navdiv.style.display = "grid";
    navdiv.style.textAlign = "center"
    navdiv.style.margin = "5px 0";

    
    let logomainheight = innerHeight/4

    logomainheight = Math.round(logomainheight)

    logomain.style.height = logomainheight + "px"

    

    mainbuttonss.style.display = "grid";
    mainbuttons.style.display = "grid";
    mainbuttons2.style.display = "grid";
    mainbutton2.style.marginTop = "20px";
    mainbutton3.style.marginTop = "20px";
    
    info.style.textAlign = "unset";
    info.style.maxWidth = "100%";
    info.style.maxWidth = "100%";


    info2.style.float = "unset";
    info2.style.maxWidth = "100%";



}
