var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.privateinternetaccess.com", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState != 4 || xhr.status != 200) {
    return;
  };

  var parser = new DOMParser();
  var piaDoc = parser.parseFromString(xhr.responseText, "text/html");

  if (piaDoc.getElementsByClassName('not-secured').length === 1) {
    var animation = document.body.appendChild(document.createElement("style"));
    animation.innerHTML = "@keyframes fade { 0% { opacity: 1 visibility: visible; } 100% { opacity: 0; visibility: hidden; } }";

    var warning = document.body.appendChild(document.createElement("div"));
    warning.style.cssText = 'width: 100%; position: fixed; left: 0; top: 0; background-color: red; z-index: 2147483647; color: white; text-align: center; font-size: 18px; padding: 10px 0 7px 0; box-shadow: rgb(255, 0, 0) 0px 3px 3px 3px; animation: fade 1s linear forwards 2s;';
    warning.innerHTML = "You are not protected by PIA";
  }
};
xhr.send();
