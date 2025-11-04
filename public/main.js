const main = document.querySelector("main");

let template = `<div id="content">
	<div class="container" id="left">
		<img src="zanesquid3_small.png" alt="me with a squid hat" class="image">
	</div>
	<div id="center">
		<nav>
			<a href="index.html">me</a>
			<a href="stuff.html">stuff</a>
			<a href="blog.html">blog</a>
			<a href="guestbook.html">guestbook</a>
		</nav>
		<main class="container">%COOL MAIN CONTENT%</main>
	</div>
	<div class="container" id="right">right</div>
</div>
<footer class="container">
	<a href="http://www.acasystems.com/en/button-maker/" target="_blank">
		<img src="80x15_human_made.png" alt="human made 80x15 badge">
	</a>
	<div id="oneko-spawn"></div>
</footer>`;

if (main.dataset["replaceme"] != undefined) {
	template = template.replace("%COOL MAIN CONTENT%", main.innerHTML);
	main.outerHTML = template;

	const onekoScript = document.createElement("script");
	onekoScript.src = "oneko.js";
	document.body.appendChild(onekoScript);
}

document.body.style.visibility = "visible";
