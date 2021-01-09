<script>
    import ListBox from "./components/ListBox.svelte";
    import ThemeCreator from "./components/ThemeCreator.svelte";

    let enabled = true;

    let page = "index";

    // Code for future use for calling functions in the content script.
    // window.onload = function() {

    // 	document.querySelector('button').addEventListener('click', refreshStyles)

    // 	function refreshStyles() {
    // 		console.log('test')
    // 		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // 			chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    // 			console.log(response.farewell);
    // 			});
    // 		});
    // 	}
    // }
</script>

<main>
    <h1 on:click={() => {page="index"}}>Schedule Themer</h1>

    {#if page === "index"}
        <p class="page-link" on:click={() => {page = "creator"}}>Create a theme</p>
        <hr>
        <ListBox/>
        <!--        <Switch checked={enabled}/>-->
        <!--        <p>Extension enabled: {enabled}</p>-->
    {:else if page === "creator" }
        <p class="page-link" on:click={() => {page = "index"}}>Index</p>
        <ThemeCreator/>
    {/if}

    <p class=footer>Check out the code on <a href="https://github.com/snxz/cgst">GitHub</a>!</p>
</main>

<style>
    main {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 355px;
        padding-bottom: 10px;
    }

    .footer {
        font-size: small;
    }

    .footer a {
        color: white;
    }

    hr {
        margin: 10px 20px;
    }

    .page-link {
        text-decoration: underline;
    }
</style>
