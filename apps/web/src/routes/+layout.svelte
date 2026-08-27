<script lang="ts">
	import '$lib/styles/app.css';
	import favicon from '$lib/assets/icons/logo.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
