<script>
import { onMount } from "svelte";

    import ThemeElement from "./ThemeElement.svelte";
    let themes = {};
    onMount(() => {
        fetch('https://raw.githubusercontent.com/snxz/cgst/main/sync/output.json')
            .then(res => res.json())
            .then(data => {
                    themes = data;
                    console.log(data)
            })
    })
</script>

<main>
    {#each Object.keys(themes) as key}
        <ThemeElement theme={themes[key]} name={key} id={key}/>
    {/each}
</main>

<style>
    main {
        background-color: white;
    }
</style>
