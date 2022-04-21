<script lang="ts">
  import '$lib/css/index.scss';
  import { all } from '$lib/content';
  import RecentPost from '$lib/components/RecentPost/RecentPost.svelte';

  const articles = all.sort((a, b) => b.date.localeCompare(a.date));
</script>

<svelte:head>
  <title>La Cuarta Pared</title>
</svelte:head>

<main>
  <h1>Artículos</h1>
  <section class="categories">
    <section class="articles">
      <section class="other-categories">
        {#each articles as entry (entry.path)}
          <RecentPost {entry} />{/each}
      </section>
    </section>
  </section>
</main>
