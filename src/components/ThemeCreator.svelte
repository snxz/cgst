<script>
    let theme = {
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
    <input type="text" placeholder="Give your theme a cool name...">

    {#each Object.keys(theme) as key}
        <div>
            <p>{key}</p>
            <input type="color" bind:value={theme[key]}>
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
