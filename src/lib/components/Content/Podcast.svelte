<script lang="ts">
  import type { Entry } from '$lib/types/Entry';
  import Title from '$lib/components/Title.svelte';
  import Podcast from './Podcast.svelte';
  export let entry: Entry = {
    title: '',
    author: '',
    date: '',
    path: '',
    placement: '',
    linktitle: '',
    readingTime: 1,
    category: 'podcast',
    podcastUrl: 'http://someurl'
  };
</script>

<Title {entry} />
<section class="content"><slot /></section>
