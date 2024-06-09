<script>
    import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import FilterableList from './FilterableList.svelte';

	export let data;
	// export let form;s
</script>

<div class="container">
	<FilterableList
		data={data.users}
		field="lastName"
		let:item={row}
	>
		<header slot="header" class="row">
			<span class="name">employee ID</span>
			<span class="name">first name</span>
			<span class="hex">last name</span>
			<span class="rgb">email</span>
			<span class="hsl">Department</span>
		</header>
	
		<div class="row">
			<span class="name">{row.employeeId}</span>
			<span class="name">{row.firstName}</span>
			<span class="hex">{row.lastName}</span>
			<span class="rgb">{row.email}</span>
			<span class="hsl">{row.department}</span>
		</div>
	</FilterableList>
	</div>
	<style>
		.container {
			padding-left: 2cm;
		}
		.row {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			gap: 1em;
			padding: 0.1em;
			background: var(--bg-1);
			border-radius: 0.2em;
		}
	
		header {
			font-weight: bold;
		}
	
		.row:not(header):hover {
			background: var(--bg-2);
		}
	
		.row:hover {
			background: var(--bg-2);
		}
	
		.color {
			aspect-ratio: 1;
			height: 100%;
			border-radius: 0.1em;
		}
	
		.rgb, .hsl {
			display: none;
		}
	
		@media (min-width: 40rem) {
			.row {
				grid-template-columns: 2em 4fr 3fr 3fr;
			}
	
			.rgb {
				display: block;
			}
		}
	
		@media (min-width: 60rem) {
			.row {
				grid-template-columns: 3fr 4fr 3fr 3fr 3fr;
			}
	
			.hsl {
				display: block;
			}
		}
	</style>