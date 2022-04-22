<script>
  import '../app.scss';
  import Logo from '$lib/components/logo.png';
</script>

<header>
  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item logo">
        <img src={Logo} alt="" />
        La Cuarta Pared
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="/podcasts">Podcast</a>
        <a class="navbar-item" href="/articles">Artículos</a>
        <a class="navbar-item" href="/blog">Blog</a>
      </div>
    </div>
  </nav>
</header>
<slot />
<footer>
  <section class="content">
    <a class="footer-logo" href="/">La Cuarta Pared</a>

    <div class="grid">
      <section class="disclaimer">
        <p>
          <span>
            Este sitio no es un medio que se actualiza con periodicidad. Algunos textos o imágenes
            incluidas en el sitio son tomadas de internet y por lo tanto se considera que están en
            el dominio público. Si hay una publicación que viole un derecho de autor, favor
            notificar por correo a
            <a href="mailto:lacuartapared@gmail.com"><span><b>lacuartapared@gmail.com</b></span></a>
            para que la eliminemos inmediatamente. Los autores no son responsables del contenido de los
            sitios web vinculados.
          </span>
        </p>
      </section>
      <section class="other-sites">
        <h3>Sitios de Interés</h3>
        <p class="footer-link">
          <a href="http://www.redmmt.es/"><span>Red MMT España</span></a>
        </p>
        <p class="footer-link">
          <a href="https://pileusmmt.libsyn.com/">
            <span>The MMT Podcast with Patricia&nbsp;Pino &amp; Christian Reilly</span>
          </a>
        </p>
        <p class="footer-link">
          <a href="https://realprogressives.org/macro-n-cheese-podcast/">
            <span>Macro and Cheese</span>
          </a>
        </p>
      </section>
    </div>
  </section>
</footer>
