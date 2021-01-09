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
    <p>Rainbow Drops</p>
    <div class="colors">
        {#each Object.keys(theme) as key, i}
            <span class={"color-preview" + (i == Object.keys(theme).length-1 ? " last-color" : "")} style="background-color:{theme[key]}"></span>
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
        margin: 20px 25px;
        width: auto;
        border-radius: 15px;
        cursor: pointer;
        transition: ease height 0.4s;
    }

    main:hover {
        height: 50px;
    }

    .colors {
        margin-left: 15px;
        display: flex;
        justify-content: flex-end;
    }

    p {
        font-size: large;
        padding-left: 15px;
    }

    span.last-color {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
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
    }
</style>