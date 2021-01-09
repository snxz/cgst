window.onload = function() {

    document.querySelector('button').addEventListener('click', refreshStyles)

    function refreshStyles() {
        console.log('test')
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
              console.log(response.farewell);
            });
          });
    }
}
