chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        refreshStyles();
        sendResponse({farewell: "goodbye"});
    }
);

async function refreshStyles() {
    console.log('test')
    let blocks = document.getElementsByClassName('event');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.setProperty('filter', 'invert(100%)')
    }
}
