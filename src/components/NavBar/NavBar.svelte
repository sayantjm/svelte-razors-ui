<script>
    import SmallNavBar from './SmallNavBar.svelte';
    import BigNavBar from './BigNavBar.svelte';
    let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 992}
    <BigNavBar />    
{:else}
    <SmallNavBar />
{/if}

