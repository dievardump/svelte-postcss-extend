<script>
  import Child from './Child.svelte';
</script>

<style lang="postcss">
  @import '../css/boot.css';

  h1 {
    @extend %colorRed;
  }
</style>

<h1>Hello World!</h1>
<Child />
