<script lang="ts">
  import './FeaturedPost.scss';
  import type { Entry } from '$lib/types/Entry';
  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: '',
    placement: '',
    linktitle: '',
    readingTime: 1,
    category: 'article'
  };
</script>

<article class="featured">
  <section class="detail">
    <a href={entry.path}>
      <h1>{entry.title}</h1>
      <p>{entry.author}</p>
    </a>
  </section>
</article>
