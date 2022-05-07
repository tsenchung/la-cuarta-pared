<script lang="ts">
  import './Podcast.scss';
  import PodcastCoverArt from './chompipera-cover-light.webp';

  import type { Entry } from '$lib/types/Entry';
  import { onMount, onDestroy } from 'svelte';
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

<section class="content"><slot /></section>
<div id="audio-player">
  <img data-amplitude-song-info="cover_art_url" alt="" />
  <div class="bottom-container">
    <progress class="amplitude-song-played-progress" id="song-played-progress" />

    <div class="time-container">
      <span class="current-time">
        <span class="amplitude-current-minutes" />:<span class="amplitude-current-seconds" />
      </span>
      <span class="duration">
        <span class="amplitude-duration-minutes" />:<span class="amplitude-duration-seconds" />
      </span>
    </div>

    <div class="control-container">
      <div class="amplitude-play-pause" id="play-pause" />
      <div class="meta-container">
        <span data-amplitude-song-info="name" class="song-name" />
        <span data-amplitude-song-info="artist" />
      </div>
    </div>
  </div>
</div>
