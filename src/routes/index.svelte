<script lang="ts">
  import '$lib/css/index.scss';
  import { all } from '$lib/content';
  import FeaturedPost from '$lib/components/FeaturedPost/FeaturedPost.svelte';
  import RecentPost from '$lib/components/RecentPost/RecentPost.svelte';

  const featured = all
    .filter(({ placement }) => placement == 'featured')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  const recent = all.filter(({ placement }) => placement == 'regular');

  const articles = recent
    .filter(({ category }) => category == 'article')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  const podcasts = recent
    .filter(({ category }) => category == 'podcast')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  const blogs = recent
    .filter(({ category }) => category == 'blog')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);
</script>

<svelte:head>
  <title>La Cuarta Pared</title>
</svelte:head>

<main>
  <section class="categories">
    <section class="featured-category">
      {#each featured as entry (entry.path)}
        <FeaturedPost {entry} />{/each}
    </section>
    <section class="podcasts">
      <a href="/podcasts"><h2>Podcasts &#10095;</h2></a>
      <section class="other-categories">
        {#each podcasts as entry (entry.path)}
          <RecentPost {entry} />{/each}
      </section>
    </section>
    <section class="articles">
      <a href="/articles"><h2>Artículos &#10095;</h2></a>
      <section class="other-categories">
        {#each articles as entry (entry.path)}
          <RecentPost {entry} />{/each}
      </section>
    </section>
    <section class="blog">
      <a href="/blog"><h2>Blog &#10095;</h2></a>
      <section class="other-categories">
        {#each blogs as entry (entry.path)}
          <RecentPost {entry} />{/each}
      </section>
    </section>
  </section>
</main>
