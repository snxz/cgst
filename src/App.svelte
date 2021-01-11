<script>
    import ListBox from "./components/ListBox.svelte";
    import ThemeCreator from "./components/ThemeCreator.svelte";

    let enabled = true;

    let page = "index";

    let current = "Classic";

    chrome.storage.local.get('current', function (data) {
        if (data.current) {
            current = data.current;
        }
    })

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area == 'local' && 'current' in changes) {
            current = changes.current.newValue;
        }
    })

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
    <h2>Current theme: {current}</h2>
    {#if page === "index"}
        <p class="page-link" on:click={() => {page = "creator"}}>Create a theme</p>
        <hr>
        <ListBox/>
        <!--        <Switch checked={enabled}/>-->
        <!--        <p>Extension enabled: {enabled}</p>-->
    {:else if page === "creator" }
        <p class="page-link" on:click={() => {page = "index"}}>Choose a theme</p>
        <ThemeCreator/>
    {/if}

    <p class=footer>Check out the code on <a href="https://github.com/snxz/cgst" target="_blank">GitHub</a>!</p>
</main>

<style>
    main {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 330px;
		padding-bottom: 10px;
		background-color: white;
		color: black;
        height: auto;
    }

    h2 {
        margin: 0 auto;
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .footer {
        font-size: small;
    }

    .footer a {
        color: black;
    }

    hr {
        margin: 10px 20px;
    }

    .page-link {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
