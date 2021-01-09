window.onload = function() {
    chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
        console.log('onMessage', msg);
        if (msg.message == "test") {
            sendResponse({message: "goodbye"});
        } else{
           sendResponse({});
        }
    });
};

async function refreshStyles() {
    console.log('test')
    let blocks = document.getElementsByClassName('event');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.setProperty('filter', 'invert(100%)')
    }
}
