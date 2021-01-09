/*******************************************************/
// THEMES
const themes = {
    theme_key: {
        "#ffce51": "Block1",
        "#a67fb9": "Block2",
        "#e67326": "Block3",
        "#00abbd": "Block4",
        "#aac02c": "Block5",
        "#ef4957": "Block6",
        "#ff75f2": "Block7",
        "#c0c0c0": "Activity",
        "#ffffff": "Free",
    },
    default_theme: {
        "Block1": "#ffce51",
        "Block2": "#a67fb9",
        "Block3": "#e67326",
        "Block4": "#00abbd",
        "Block5": "#aac02c",
        "Block6": "#ef4957",
        "Block7": "#ff75f2",
        "Activity": "#c0c0c0",
        "Free": "#ffffff",  
    },
    rainbow_drops_theme: {
        "Block1": "#d2bb00",
        "Block2": "#8038a4",
        "Block3": "#fb7821",
        "Block4": "#00abbd",
        "Block5": "#44bd00",
        "Block6": "#ef4957",
        "Block7": "#e352d6",
        "Activity": "#6a6a6a",
        "Free": "#1C1C1C",
    }
}
/*******************************************************/

const loadCSSVariables = () => {
    let blocks = document.getElementsByClassName('event');
    for (let i = 0; i < blocks.length; i++) {
        let color = blocks[i].style.backgroundColor;
        let hex = "#ffffff"
        if (color.includes('rgb')) {
            hex = rgb2hex(color);
        }
        console.log(color);
        console.log(themes.theme_key[hex])
        if (themes.theme_key[hex] !== undefined) {
            let block = themes.theme_key[hex];
            blocks[i].style.backgroundColor = 'var(--cgst-' + block + ')';
        }
    }

    loadTheme("rainbow_drops_theme")
}

setTimeout(loadCSSVariables, 500);
setTimeout(() => {loadTheme('default_theme')}, 2000)

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
      if (request.action == "add")
        
        sendResponse({farewell: "goodbye"});
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