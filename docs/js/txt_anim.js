var text = ['โย่ววว ้นไ ัฟ กนรทงฦ', "Fpj;;; how ya doin'?"];
                                         
var cur = '<span class="blink">_</span>';
var elt = document.getElementById("typing");
var txtIndex = 0;

function delText(elt) {
    var inTxt = elt.innerText;
    elt.innerHTML = inTxt.substring(0, inTxt.length - 2) + cur;
}

function appText(elt) {
    var inTxt = elt.innerText;
    var getTxt = text[txtIndex][inTxt.length - 1];
    if (getTxt === undefined) {
        getTxt = "";
    }
    elt.innerHTML = inTxt.substring(0, inTxt.length - 1) + getTxt + cur;
}

function runApp() {
    var state = setInterval(function () { appText(elt) }, 100);
    setTimeout(function () { clearInterval(state) }, 2000);
}

function runDel() {
    var state = setInterval(function () { delText(elt) }, 100);
    setTimeout(function () { clearInterval(state) }, 2000);
}

function runAni() {
    setTimeout(runApp, 0);
    setTimeout(runDel, 5000);
    setTimeout(function () { txtIndex = 1 }, 7000);
    setTimeout(runApp, 7001);
    setTimeout(runDel, 12001);
    setTimeout(function () { txtIndex = 0 }, 14001);
}

(function () {
    runAni();
    setInterval(runAni, 14002);
})();