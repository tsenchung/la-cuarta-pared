<script lang="ts">
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
    readingTime: 1
  };

  function readingTime(entry) {
    return Math.ceil(entry.readingTime);
  }
</script>

<svelte:head>
  <title>{entry.title}</title>
</svelte:head>

<h1>{entry.title}</h1>
<hr class="title-divider" />
<section class="title-details">
  <p class="author">{entry.author}</p>
  <p class="date">{formatDate(entry.date)}</p>
  <p class="reading-time">
    Tiempo de lectura: {readingTime(entry)} minuto{readingTime(entry) == 1 ? '' : 's'}
  </p>
</section>
