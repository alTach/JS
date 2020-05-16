<script>
    import {onMount, onDestroy} from 'svelte'

    onMount(() => console.log('onMount'));
    onDestroy(() => console.log('onDestroy'));
</script>

<div class="backdrop"></div>
<slot name="header"></slot>
