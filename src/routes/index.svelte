<script lang="ts">
  import '$lib/css/index.scss';
  import { all } from '$lib/content';

  const featured = all
    .filter(({ placement }) => placement == 'featured')
    .sort((a, b) => b.date.localeCompare(a.date));

  const recent = all
    .filter(({ placement }) => placement == 'regular')
    .sort((a, b) => b.date.localeCompare(a.date));
</script>

<svelte:head>
  <title>La Cuarta Pared</title>
</svelte:head>

<main />
