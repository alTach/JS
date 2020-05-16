<script>
	import ContentCard from './ContentCard.svelte'
	let name = 'Turach';
	let age = 18;
	let title = '';
	let description = '';

	$: console.log(name);

	$: uppercaseName = name.toUpperCase();

	$: if (name === 'Vova') {
		age = 19;
	
	}

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		name = 'Vova'
	}

	function nameInput($event) {
		name = $event.target.value;
	}
</script>

<main>
	<h1>Hello {uppercaseName}! my age is: {age}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click="{incrementAge}">Increment age</button>
	<button on:click="{changeName}">Chage name</button>
	<!-- <input type="text" value="{name}" on:input="{nameInput}"> -->
	<input type="text" bind:value="{name}">
	<input type="text" bind:value="{title}">
 	<textarea rows="3" bind:value="{description}"></textarea>

	<ContentCard
	userName='{uppercaseName}' 
	{description}
	jobTitle="{title}"/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		/* text-transform: uppercase; */
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>