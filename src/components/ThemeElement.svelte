<script>
    export let name = "Theme Name";
    export let id = "default_theme";
    export let theme = {
        "Block 1": "#d2bb00",
        "Block 2": "#8038a4",
        "Block 3": "#fb7821",
        "Block 4": "#00abbd",
        "Block 5": "#44bd00",
        "Block 6": "#ef4957",
        "Block 7": "#e352d6",
        "Activity": "#6a6a6a",
        "Free": "#1C1C1C",
    }

    async function applyStyle() {
        // console.log(id)
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, {action: "set", theme: id}, function(response) {
        //     console.log(response);
        //     });
        // });
        await chrome.storage.local.set({ current: id })
    }
</script>

<main on:click={applyStyle}>
    <p>{name}</p>
    <div class="colors">
        {#each Object.keys(theme) as key, i}
        {#if i <= 9}
            <span title={theme[key]} class={"color-preview" + (i == 9 ? " last-color" : "")} style="background-color:{theme[key]}"></span>
        {/if}
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        border: 1px solid #ccc;
        box-shadow: 4px 4px 8px #ccc;
        margin: 15px 25px;
        width: auto;
        border-radius: 10px;
        cursor: pointer;
        transition: ease height 0.3s, ease margin 0.3s;
    }

    main:hover {
        height: 30px;
    }

    main:hover span {
        width: 20px;
    }

    .colors {
        margin-left: 15px;
        display: flex;
        justify-content: flex-end;
    }

    p {
        font-size: 15px;
        padding-left: 15px;
        transition: ease font-size 0.3s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span.last-color {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    div {
        display: flex;
        height: 100%;
    }

    span {
        display: flex;
        box-sizing: border-box;
        height: 100%;
        width: 15px;
        transition: ease width .3s;
    }
</style>