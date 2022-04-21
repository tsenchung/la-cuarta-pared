<script lang="ts">
  import './RecentPost.scss';
  import type { Entry } from '$lib/types/Entry';
  import { formatDate } from '$lib/date';
  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: '',
    thumbnail: '',
    placement: '',
    linktitle: '',
    draft: false,
    readingTime: 1,
    category: 'article'
  };
</script>

<article class="recent">
  <section class="detail">
    <a href={entry.path}>
      <h1>{entry.title}</h1>
      <p>{entry.author}</p>
    </a>
  </section>
</article>
