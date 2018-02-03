const thaiKey = ['ๅ', '+', '/', '๑', '-', '๒', 'ภ', '๓', 'ถ', '๔', 'ุ', 'ู', 'ึ', '฿', 'ค', '๕', 'ต', '๖', 'จ', '๗', 'ข', '๘', 'ช', '๙', 'ฃ', 'ฅ', 'ๆ', '๐', 'ไ', '"', 'ำ', 'ฎ', 'พ', 'ฑ', 'ะ', 'ธ', 'ั', 'ํ', 'ี', '๊', 'ร', 'ณ', 'น', 'ฯ', 'ย', 'ญ', 'บ', 'ฐ', 'ล', ',', 'ฟ', 'ฤ', 'ห', 'ฆ', 'ก', 'ฏ', 'ด', 'โ', 'เ', 'ฌ', '้', '็', '่', '๋', 'า', 'ษ', 'ส', 'ศ', 'ว', 'ซ', 'ง', '.', 'ผ', '(', 'ป', ')', 'แ', 'ฉ', 'อ', 'ฮ', 'ิ', 'ฺ', 'ื', '์', 'ท', '?', 'ม', 'ฒ', 'ใ', 'ฬ', 'ฝ', 'ฦ'];
const engKey = ['1', '!', '2', '@', '3', '#', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', '-', '_', '=', '+', '\\', '|', 'q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '[', '{', ']', '}', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', ';', ':', '\'', '"', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '<', '.', '>', '/', '?'];

var contextMenuItem = {
  "id": "pimHereRaiNi",
  "title": "พิมพ์เฮียไรนิ",
  "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(data){
  if(data.menuItemId == "pimHereRaiNi" && data.selectionText){
    alert(transmute(data.selectionText))
  }
})

function convert(text, reverse=false){
  let newText = "";
  
  for (let i = 0; i < text.length; i++) {
    if(!reverse){
      // TH -> EN
      if (thaiKey.indexOf(text[i]) != -1) {
        newText += engKey[thaiKey.indexOf(text[i])];
      } else {
        newText += text[i];
      }
    }else{
      // EN -> TH
      if (engKey.indexOf(text[i]) != -1) {
        newText += thaiKey[engKey.indexOf(text[i])];
      } else {
        newText += text[i];
      }
    }
  }
  return newText;
}

function transmute(input){
  const latinCh = /[a-z]/gi; // A-Z, a-z
  const thaiCh = /[ก-๛]/gu; // Unicode from 0E01 - 0E5B (Thai)

  if (thaiCh.test(input)) {
    return convert(input)
  } else if (latinCh.test(input)) {
    return convert(input,true)
  } else {
    return "EN -> TH:  " + convert(input, true) + "\nTH -> EN:  " + convert(input);
  }
}