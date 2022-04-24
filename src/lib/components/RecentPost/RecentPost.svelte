<script lang="ts">
  import './RecentPost.scss';
  import type { Entry } from '$lib/types/Entry';
  import { formatDate } from '$lib/date';
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

<article class="recent">
  <section class="detail">
    <a href={entry.path}>
      <h2>{entry.title}</h2>
      <p>{entry.author}</p>
    </a>
  </section>
  <hr />
</article>
