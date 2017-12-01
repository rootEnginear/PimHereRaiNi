const latinCh = /[a-z]/gi;
const thaiCh = /[ก-๛]/gu;
const thaiKey = ['ๅ', '+', '/', '๑', '-', '๒', 'ภ', '๓', 'ถ', '๔', 'ุ', 'ู', 'ึ', '฿', 'ค', '๕', 'ต', '๖', 'จ', '๗', 'ข', '๘', 'ช', '๙', 'ฃ', 'ฅ', 'ๆ', '๐', 'ไ', '"', 'ำ', 'ฎ', 'พ', 'ฑ', 'ะ', 'ธ', 'ั', 'ํ', 'ี', '๊', 'ร', 'ณ', 'น', 'ฯ', 'ย', 'ญ', 'บ', 'ฐ', 'ล', ',', 'ฟ', 'ฤ', 'ห', 'ฆ', 'ก', 'ฏ', 'ด', 'โ', 'เ', 'ฌ', '้', '็', '่', '๋', 'า', 'ษ', 'ส', 'ศ', 'ว', 'ซ', 'ง', '.', 'ผ', '(', 'ป', ')', 'แ', 'ฉ', 'อ', 'ฮ', 'ิ', 'ฺ', 'ื', '์', 'ท', '?', 'ม', 'ฒ', 'ใ', 'ฬ', 'ฝ', 'ฦ'];
const engKey = ['1', '!', '2', '@', '3', '#', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', '-', '_', '=', '+', '\\', '|', 'q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '[', '{', ']', '}', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', ';', ':', '\'', '"', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '<', '.', '>', '/', '?'];

let bgpage = chrome.extension.getBackgroundPage();
let input = bgpage.word;
let newText = "";

// If there are any Latin characters in it
if(latinCh.test(input)){
    // T: EN -> TH
    for (let i = 0; i < input.length; i++) {
        if (engKey.indexOf(input[i]) != -1) {
            newText += thaiKey[engKey.indexOf(input[i])];
        } else {
            newText += input[i];
        }
    }
}else if(thaiCh.test(input)){
    // T: TH -> EN
    for (let i = 0; i < input.length; i++) {
        if (thaiKey.indexOf(input[i]) != -1) {
            newText += engKey[thaiKey.indexOf(input[i])];
        } else {
            newText += input[i];
        }
    }
}else{
    for (let i = 0; i < input.length; i++) {
        if (engKey.indexOf(input[i]) != -1) {
            newText += thaiKey[engKey.indexOf(input[i])];
        } else {
            newText += input[i];
        }
    }
    newText += " / ";
    for (let i = 0; i < input.length; i++) {
        if (thaiKey.indexOf(input[i]) != -1) {
            newText += engKey[thaiKey.indexOf(input[i])];
        } else {
            newText += input[i];
        }
    }
}

document.getElementById("converted").innerText = newText;