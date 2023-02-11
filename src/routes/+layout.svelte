<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	:root {
		--font-body: 'Montserrat', Arial, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
			sans-serif;
		--font-mono: 'Montserrat', Arial, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
			sans-serif;
		--color-bg-0: rgb(202, 216, 228);
		--color-bg-1: hsl(209, 36%, 86%);
		--color-bg-2: hsl(224, 44%, 95%);
		--color-theme-1: #ff3e00;
		--color-theme-2: #4075a6;
		--color-text: rgba(0, 0, 0, 0.7);
		--column-width: 42rem;
		--column-margin-top: 4rem;
		font-family: var(--font-body);
		color: var(--color-text);

		--fc-small-font-size: 0.85em;
		--fc-page-bg-color: rgba(217, 189, 151, 0.2);
		--fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
		--fc-neutral-text-color: #333;
		--fc-border-color: rgba(0, 0, 0, 0.2);

		--fc-button-text-color: #151e27;
		--fc-button-bg-color: #d9bd97;
		--fc-button-border-color: #956e37;
		--fc-button-hover-bg-color: #e9d9c3;
		--fc-button-hover-border-color: #e9d9c3;
		--fc-button-active-bg-color: #e9d9c3;
		--fc-button-active-border-color: #e9d9c3;

		--fc-event-bg-color: #d9bd97;
		--fc-event-border-color: #956e37;
		--fc-event-text-color: #000;
		--fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);

		--fc-non-business-color: rgba(0, 0, 0, 0.15);
		--fc-highlight-color: rgba(188, 232, 241, 0.3);
		--fc-today-bg-color: rgba(217, 189, 151, 0.2);
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
