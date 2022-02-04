//кнопка настроек
let settings = "close";
document.getElementById("setting__icon").addEventListener("click", function () {  
    if (settings != "open") {
        document.getElementById("settings").classList.add("settings__active");
            document.querySelector('.settings__container').style.height = '100%';
            document.querySelector('.settings__container').style.opacity = '1';
            document.getElementById('setting__icon').style.margin = '10px';
            document.getElementById('settings').style.padding = '10px';
            document.getElementById('settings').style.paddingLeft = '15px';
            document.getElementById("setting__icon").setAttribute("name", "close-circle-outline");
        settings = "open";
    } else  {
        document.getElementById("settings").classList.remove("settings__active");
        document.querySelector('.settings__container').style.height = '0';
        document.querySelector('.settings__container').style.opacity = '0';
        document.getElementById('setting__icon').style.margin = '0';
        document.getElementById('settings').style.padding = '0';
        document.getElementById("setting__icon").setAttribute("name", "settings-outline");
        settings = "close";
    }

});




// это этвечает за адаптивность. Сделанно это через JS потому, что я лентяй и для кнопки редактировать не сделал собственный класс на откртие, а присваиваю такой-же как для настроек
setInterval(function() {
    if (settings != "close" && window.innerWidth > 645 && window.innerHeight > 580 && document.getElementById("create").classList.contains('settings__active') != true) {
        document.getElementById("create").style.right = "calc(5vw + 300px)";
        document.getElementById("search").setAttribute("style", "right: calc(5vw + 300px); bottom: calc(5vh + 80px);");
    } else if (settings != "close" && window.innerWidth <= 645 && window.innerWidth > 500 && window.innerHeight > 580) {
        document.getElementById("create").style.right = "5vw";
    } else if (document.getElementById("create").classList.contains('settings__active') != false && document.getElementById("settings").classList.contains('settings__active') != false && window.innerWidth > 645 && window.innerHeight > 580) {
        document.getElementById("search").style.right = "5vw";
        document.getElementById("search").style.bottom = "calc(5vh + 470px";
    } else if (document.getElementById("create").classList.contains("settings__active") != false && window.innerWidth > 645 && window.innerHeight > 580) {
        document.getElementById("search").style.right = "calc(5vw + 360px";
    } else {
        document.getElementById("create").style.right = "";
        document.getElementById("search").setAttribute("style", "");
    }   
}, 200);




//переключение темы
let theme = "light";
document.getElementById("theme-light").addEventListener("click", function () {
    document.getElementById("theme-light").style.outline = "solid 2px rgba(94, 94, 94, 0.645)";
    document.getElementById("theme-dark").style.outline = "0";
    document.getElementById("themes").innerHTML = ".theme:hover {background-color: rgba(255, 255, 255, 0.6); backdrop-filter: blur(20px);}";
});
document.getElementById("theme-dark").addEventListener("click", function () {
    document.getElementById("theme-dark").style.outline = "solid 2px rgba(94, 94, 94, 0.645)";
    document.getElementById("theme-light").style.outline = "0";
    document.getElementById("themes").innerHTML = ".theme {background-color: rgba(0, 0, 0, 0.6);} .theme:hover {background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(20px);}";
});

//Переключение фона
document.getElementById("green-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__anim__green";
});
document.getElementById("pink-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__anim__pink";
});
document.getElementById("sea-fire-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__anim__sea-fire";
});
document.getElementById("aqua-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__anim__aqua";
});

document.getElementById("city-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__city";
});
document.getElementById("wow-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__wow";
});
document.getElementById("hils-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__hils";
});
document.getElementById("pixel-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__pixel";
});
document.getElementById("cube-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__cube";
});
document.getElementById("brain-bg").addEventListener("click", function () {
    document.querySelector(".body").id = "bg__gif__brain";
});