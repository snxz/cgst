// Initialize important fields...
let themes = {};
let currentTheme = "Classic";
chrome.storage.local.get('current', function (data) {
    if (data.current) {
        currentTheme = data.current
    }
});
let theme_key = {
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

// loadCSSVariables - add CSS vars to all necessary DOM elements
const loadCSSVariables = () => {
    let blocks = document.getElementsByClassName('event');
    for (let i = 0; i < blocks.length; i++) {
        let color = blocks[i].style.backgroundColor;
        let hex = "#ffffff"
        if (color.includes('rgb')) {
            hex = rgb2hex(color);
        }
        boxShadow = blocks[i].style['box-shadow'];
        if (boxShadow !== "") {
            blocks[i].style.boxShadow = '';
            blocks[i].style.padding = '';
            boxShadow = rgb2hex(boxShadow.split(/ (?![^\(]*\))/)[0])
            if (theme_key[boxShadow] !== undefined) {
                let block = theme_key[boxShadow];
                blocks[i].style.color = 'var(--cgst-' + 'Text' + ')';
                blocks[i].style.border = '1px solid var(--cgst-' + 'Border' + ')';
                blocks[i].style.backgroundColor = 'var(--cgst-' + 'Free' + ')';
                continue;
            }
        }
        
        // console.log(hex);

        if (theme_key[hex] !== undefined) {
            let block = theme_key[hex];
            blocks[i].style.border = '1px solid var(--cgst-' + 'Border' + ')';
            if (block == "Activity" || block == "Free") {
                blocks[i].style.color = 'var(--cgst-' + 'Text' + ')';
            } else {
                blocks[i].style.color = 'var(--cgst-' + 'EventText' + ')';
            }
            blocks[i].style.backgroundColor = 'var(--cgst-' + block + ')';
        }
    }
    document.body.style.backgroundColor = 'var(--cgst-' + 'Background' + ')';

    let nav = document.getElementsByClassName('navbar ')
    nav[0].style.backgroundColor = 'var(--cgst-' + 'Free' + ')';
    nav[0].style.color = 'var(--cgst-' + 'Text' + ')';
    nav[0].childNodes.forEach((node) => {
        // console.log(node)
        if (node.nodeName !== "#text") {
            node.style.color = 'var(--cgst-' + 'Text' + ')';
        }
    })

    // TODO: Find a way to make the dropdown icon change colors... oh Nathan, why use Bootstrap!!
    // let toggler = document.getElementsByClassName('navbar-toggler-item')
    // console.log(toggler)
    // toggler[0].style.backgroundImage = "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='#ffffff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E)"

}

// loadTheme - sets all necessary CSS vars to the theme's colors
const loadTheme = (theme) => {
    Object.keys(themes[theme]).forEach(block => {
        document.documentElement.style.setProperty('--cgst-' + block, themes[theme][block])
    })
    currentTheme = theme;
}

// onMessage - receives messages from the popup to change themes
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

chrome.storage.onChanged.addListener((changes, area) => {
    if (area == 'local' && 'current' in changes) {
        loadTheme(changes.current.newValue);
    }
})


// rgb2hex - converts between the browser's rgb values and hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// DOMUpdate - Update the classes ONLY if events are updated in the DOM.
function DOMUpdate(mutations) {
    for (let mutation of mutations) {
        for (let addedNode of mutation.addedNodes) {
            // console.log(addedNode.className)
            let classes = addedNode.className;
            if (classes !== undefined) {
                if (addedNode.className.includes('event ')) {
                    if (themes['Classic'] == undefined) {
                        console.log('getting themes')
                        getThemes()
                        loadCSSVariables()
                    } else {
                        loadCSSVariables();
                    }
                    return;
                }
            }
        }
    }
}

// Watch the DOM and apply the needed styles if the page changes.
let observer = new MutationObserver(DOMUpdate);
observer.observe(document, { childList: true, subtree: true });

function getThemes() {
    fetch('https://raw.githubusercontent.com/snxz/cgst/main/sync/output.json')
    .then(res => res.json())
    .then(data => {
        themes = data;
        console.log(data)
        loadTheme(currentTheme);
    })
    
}