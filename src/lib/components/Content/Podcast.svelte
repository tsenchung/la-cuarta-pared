<script lang="ts">
  import './Podcast.scss';
  import PodcastCoverArt from './chompipera-cover-light.webp';

  import type { Entry } from '$lib/types/Entry';
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

  let player: HTMLAudioElement;
  let currentTime: number;
  let duration: number;
  let playing: boolean;
  let playerPaused: boolean;
  let paused: boolean;

  let formattedTime: string;
  $: formattedTime = formatTime(currentTime);
  $: formattedDuration = formatTime(duration);
  $: paused = playerPaused != false;
  $: playing = !paused;

  function formatTime(time: number) {
    if (time == undefined) {
      return '00:00';
    }
    const seconds = Math.trunc(time % 60);
    const minutes = Math.trunc(time / 60);
    const formattedMinutes = minutes > 9 ? minutes.toString(10) : '0' + minutes.toString(10);
    const formattedSeconds = seconds > 9 ? seconds.toString(10) : '0' + seconds.toString(10);
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function onProgressClick(e: MouseEvent) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    player.fastSeek((x / this.offsetWidth) * duration);
  }
</script>

<audio
  bind:this={player}
  bind:currentTime
  bind:paused={playerPaused}
  bind:duration
  src="https://upload.wikimedia.org/wikipedia/commons/3/3b/En-Parallel_computing.ogg"
>
  <track kind="captions" />
</audio>

<div class="audio-player">
  <picture>
    <img src={PodcastCoverArt} />
  </picture>
  <progress
    value={currentTime != undefined ? currentTime / duration : 0}
    on:click={onProgressClick}
  />
  <div class="timestamps">
    <span class="time">{formattedTime}</span>
    <span class="center" />
    <span class="time">{formattedDuration}</span>
  </div>
  <div class="controls">
    <button
      class="button"
      class:paused
      class:playing
      on:click={() => (paused ? player.play() : player.pause())}
    />
    <div class="details">
      <p>{entry.title}</p>
      <p>{entry.author}</p>
    </div>
  </div>
</div>
<section class="content"><slot /></section>
