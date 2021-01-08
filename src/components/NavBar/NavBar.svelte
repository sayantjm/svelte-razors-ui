<script>
    import SmallNavBar from './SmallNavBar.svelte';
    import BigNavBar from './BigNavBar.svelte';
    import globalStore from '../../stores/globalStore';

    let screenWidth;

    $: if (screenWidth > 992) {
        globalStore.toggleItem('sidebar', false);
    }
    
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 992}
    <BigNavBar />    
{:else}
    <SmallNavBar />
{/if}

