<script>
    import Switch from './Switch.svelte';
    let theme = {
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
    let checked = false;
    chrome.storage.local.get('custom', function(data) {
        if (data.custom) {
            theme = data.custom
        } else {
            chrome.storage.local.set({ custom: theme })
        }
    })
    chrome.storage.local.get('useCustom', function(data) {
        if (data.useCustom !== undefined) {
            checked = data.useCustom;
        } else {
            chrome.storage.local.set({ useCustom: checked })
        }
    })
    
    function setUseCustom(e) {
        chrome.storage.local.set({ useCustom: checked })
    }

    function updateColor(e) {
        chrome.storage.local.set({ custom: theme })
    }

    // $: console.log(checked)
</script>

<main>
    <!-- <input type="text" placeholder="Give your theme a cool name..."> -->
    <div class="switch">
        <p>Use custom theme?</p>
        <Switch bind:checked={checked} on:change={setUseCustom} />
    </div>
    {#each Object.keys(theme) as key}
        <div>
            <p>{key}</p>
            <input type="color" bind:value={theme[key]} id={key} on:change={updateColor}>
        </div>
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
    }

    div.switch {
        align-items: center;
    }

    input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 25px;
        height: 25px;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
    }

    input[type=text]{
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        border: 1px solid white;
        width: 215px;
        height: 25px;
        padding-left: 10px;
        margin: 20px;
    }

    input[type=text]:focus {
        outline: none;
    }
</style>
