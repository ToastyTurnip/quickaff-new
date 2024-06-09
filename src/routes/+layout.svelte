<script>
	import NavBar from './NavBar.svelte';
	import './styles.css';
</script>

<div class="app">
	<NavBar />
	<div class="main">
		<div>
			<slot />
		</div>
	</div>
	<!-- <main>
		<slot />
	</main> -->

	<footer>
		<p>DEVELOPMENT BUILD!!</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		/* background-color: blanchedalmond; */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
