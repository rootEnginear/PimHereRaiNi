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

function transmute(input){
  const latinCh = /[a-z]/gi; // A-Z, a-z
  const thaiCh = /[ก-๛]/gu; // Unicode from 0E01 - 0E5B (Thai)
  const thaiKey = ['ๅ', '+', '/', '๑', '-', '๒', 'ภ', '๓', 'ถ', '๔', 'ุ', 'ู', 'ึ', '฿', 'ค', '๕', 'ต', '๖', 'จ', '๗', 'ข', '๘', 'ช', '๙', 'ฃ', 'ฅ', 'ๆ', '๐', 'ไ', '"', 'ำ', 'ฎ', 'พ', 'ฑ', 'ะ', 'ธ', 'ั', 'ํ', 'ี', '๊', 'ร', 'ณ', 'น', 'ฯ', 'ย', 'ญ', 'บ', 'ฐ', 'ล', ',', 'ฟ', 'ฤ', 'ห', 'ฆ', 'ก', 'ฏ', 'ด', 'โ', 'เ', 'ฌ', '้', '็', '่', '๋', 'า', 'ษ', 'ส', 'ศ', 'ว', 'ซ', 'ง', '.', 'ผ', '(', 'ป', ')', 'แ', 'ฉ', 'อ', 'ฮ', 'ิ', 'ฺ', 'ื', '์', 'ท', '?', 'ม', 'ฒ', 'ใ', 'ฬ', 'ฝ', 'ฦ'];
  const engKey = ['1', '!', '2', '@', '3', '#', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', '-', '_', '=', '+', '\\', '|', 'q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P', '[', '{', ']', '}', 'a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', ';', ':', '\'', '"', 'z', 'Z', 'x', 'X', 'c', 'C', 'v', 'V', 'b', 'B', 'n', 'N', 'm', 'M', ',', '<', '.', '>', '/', '?'];

  let newText = "";

  if (thaiCh.test(input)) {
    // T: TH -> EN
    for (let i = 0; i < input.length; i++) {
      if (thaiKey.indexOf(input[i]) != -1) {
        newText += engKey[thaiKey.indexOf(input[i])];
      } else {
        newText += input[i];
      }
    }
  } else if (latinCh.test(input)) {
    // T: EN -> TH
    for (let i = 0; i < input.length; i++) {
      if (engKey.indexOf(input[i]) != -1) {
        newText += thaiKey[engKey.indexOf(input[i])];
      } else {
        newText += input[i];
      }
    }
  } else {
    newText = "EN -> TH:  ";
    for (let i = 0; i < input.length; i++) {
      if (engKey.indexOf(input[i]) != -1) {
        newText += thaiKey[engKey.indexOf(input[i])];
      } else {
        newText += input[i];
      }
    }
    newText += "\nTH -> EN:  ";
    for (let i = 0; i < input.length; i++) {
      if (thaiKey.indexOf(input[i]) != -1) {
        newText += engKey[thaiKey.indexOf(input[i])];
      } else {
        newText += input[i];
      }
    }
  }
  // Return
  return newText;
}