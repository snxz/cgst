<script>
    import ColorSquare from "./ColorSquare.svelte";
</script>
<main>
    <p>Rainbow Drops</p>
    <div class="colors">
        <ColorSquare color="#FF7F50"/>
        <ColorSquare color="#9FE2BF"/>
        <ColorSquare color="#6495ED"/>
        <ColorSquare color="#9FE2BF"/>
        <ColorSquare color="#9FE2BF"/>
        <ColorSquare color="#6495ED"/>
        <ColorSquare color="#9FE2BF"/>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .colors {
        margin-left: 15px;
        display: flex;
        justify-content: flex-end;
    }

    p {
        font-size: large;
    }
</style>