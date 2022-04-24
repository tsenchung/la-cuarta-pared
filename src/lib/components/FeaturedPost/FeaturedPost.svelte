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
      <h2>{entry.title}</h2>
      <p>{entry.author}</p>
    </a>
  </section>
</article>
