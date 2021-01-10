<script>
    export let name = "Theme Name";
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
</script>

<main>
    <p>{name}</p>
    <div class="colors">
        {#each Object.keys(theme) as key, i}
            <span title={theme[key]} class={"color-preview" + (i == Object.keys(theme).length-1 ? " last-color" : "")} style="background-color:{theme[key]}"></span>
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
        height: 40px;
        margin: 15px 15px;
    }

    main:hover span {
        width: 20px;
    }

    main:hover p {
        font-size: 15px;
    }

    .colors {
        margin-left: 15px;
        display: flex;
        justify-content: flex-end;
    }

    p {
        font-size: 16px;
        padding-left: 15px;
        transition: ease font-size 0.3s;
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