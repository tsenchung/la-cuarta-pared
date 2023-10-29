<script lang="ts">
  import '$lib/css/index.scss';
  import { all, recentArticles } from '$lib/virtual:content';
  import FeaturedPost from '$lib/components/FeaturedPost/FeaturedPost.svelte';
  import RecentPost from '$lib/components/RecentPost/RecentPost.svelte';

  const featured = all
    .filter(({ placement }) => placement == 'featured')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  const recent = all.filter(({ placement }) => placement == 'regular');

  const articles = recentArticles.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

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

<main class="categories">
  <section class="featured">
    <h1 class="visually-hidden">Featured</h1>
    <div class="featured-category">
      {#each featured as entry (entry.path)}
        <FeaturedPost {entry} />{/each}
    </div>
  </section>
  <hr />
  <section class="podcasts">
    <h1 class="category-title"><a href="/podcasts">Podcasts &#10095;</a></h1>
    <div class="other-categories">
      {#each podcasts as entry (entry.path)}
        <RecentPost {entry} />{/each}
    </div>
  </section>
  <section class="articles">
    <h1 class="category-title"><a href="/articles">Artículos &#10095;</a></h1>
    <div class="other-categories">
      {#each articles as entry (entry.path)}
        <RecentPost {entry} />{/each}
    </div>
  </section>
  <section class="blog">
    <h1 class="category-title"><a href="/blog">Blog &#10095;</a></h1>
    <div class="other-categories">
      {#each blogs as entry (entry.path)}
        <RecentPost {entry} />{/each}
    </div>
  </section>
</main>
