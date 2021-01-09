<script>
    export let color;
</script>

<main>
    <input type="color" id="color-picker" value="{color}">
</main>

<style>
    main {
        padding-left: 1px;
        padding-right: 1px;
    }

    input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 20px;
        height: 20px;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: none;
    }
</style>
