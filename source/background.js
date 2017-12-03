chrome.runtime.onMessage.addListener(receiver);
window.word = "g]nvd8e c]h;]v'gxbf9i'ouhot";
function receiver(request, sender, sendResponse){
    window.word = request.text;
}