let themes = {};

window.onload = (e) => {
    fetch('https://raw.githubusercontent.com/snxz/cgst/main/sync/output.json')
    .then(res => res.json())
    .then(data => {
        themes = data;
        console.log(data)
        themes.theme_key = {
            "#ffce51": "Block1",
            "#a67fb9": "Block2",
            "#e67326": "Block3",
            "#00abbd": "Block4",
            "#aac02c": "Block5",
            "#ef4957": "Block6",
            "#ff75f2": "Block7",
            "#c0c0c0": "Activity",
            "#ffffff": "Free",
            "#212529": "Text",
        }
    })
}

const loadCSSVariables = () => {
    let blocks = document.getElementsByClassName('event');
    for (let i = 0; i < blocks.length; i++) {
        let color = blocks[i].style.backgroundColor;
        let hex = "#ffffff"
        if (color.includes('rgb')) {
            hex = rgb2hex(color);
        }
        // boxShadow = blocks[i].style['box-shadow'];
        // if (boxShadow !== "") {
        //     boxShadow = rgb2hex(boxShadow.split(/ (?![^\(]*\))/)[0])
        //     console.log(boxShadow)
        //     if (themes.theme_key[boxShadow] !== undefined) {
        //         blocks[i].style.boxShadow = 'var(--cgst-' + block + ') 0px 0px 0.3em 0.3em inset';
        //     }
        // }
        
        // console.log(color);
        // console.log(themes.theme_key[hex])
        if (themes.theme_key[hex] !== undefined) {
            let block = themes.theme_key[hex];
            blocks[i].style.color = 'var(--cgst-' + 'ClassText' + ')';
            blocks[i].style.backgroundColor = 'var(--cgst-' + block + ')';
        }
    }

    loadTheme("Rainbow Drops")
}

setTimeout(loadCSSVariables, 500);
setTimeout(() => {loadTheme('horrible looking')}, 2000)

/*******************************************************/

const loadTheme = (theme) => {
    Object.keys(themes[theme]).forEach(block => {
        document.documentElement.style.setProperty('--cgst-' + block, themes[theme][block])
    })
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.action == "set")
        loadTheme(request.theme);
        sendResponse({success: "true"});
    }
);

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


    


// Update the classes ONLY if events are updated in the DOM.
function DOMUpdate(mutations) {
    for (let mutation of mutations) {
        for (let addedNode of mutation.addedNodes) {
            // console.log(addedNode.className)
            let classes = addedNode.className;
            if (classes !== undefined) {
                if (addedNode.className.includes('event ')) {
                    // refreshStyles();
                    return;
                }
            }
        }
    }
}

// Watch the DOM and apply the needed styles if the page changes.
let observer = new MutationObserver(DOMUpdate);
observer.observe(document, { childList: true, subtree: true });