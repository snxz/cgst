<script>
	import ToggleSelect from "./components/ToggleSelect.svelte";
	import Switch from "./components/Switch.svelte";
	import ListBox from "./components/ListBox.svelte";

	let enabled = true;
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
	<h1>Schedule Themer</h1>
	<hr>
	<ListBox/>
	<Switch checked={enabled}/>
	<p>Extension enabled: {enabled}</p>
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
</style>
