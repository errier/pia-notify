var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.privateinternetaccess.com", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState != 4 || xhr.status != 200) {
    return;
  };

  var hidden = document.body.appendChild(document.createElement("div"));
  hidden.style.display = 'none';
  hidden.innerHTML = xhr.responseText.replace(/^.*?<div class="topbar">(.*?)<\/div>.*?$/s,"$1");

  if (hidden.getElementsByClassName('not-secured').length === 1) {
    var animation = document.body.appendChild(document.createElement("style"));
    animation.innerHTML = "@keyframes fade { 0% { opacity: 1 visibility: visible; } 100% { opacity: 0; visibility: hidden; } }";

    var warning = document.body.appendChild(document.createElement("div"));
    warning.style.cssText = 'width: 100%; position: fixed; left: 0; top: 0; background-color: red; z-index: 2147483647; color: white; text-align: center; font-size: 18px; padding: 10px; box-shadow: 0px 5px 5px 0px rgba(170,170,170,1);
; animation: fade 1s linear forwards 2s;';
    warning.innerHTML = "You are not protected by PIA!";
  }
};
xhr.send();
