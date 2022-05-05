<script>
  import '../app.scss';
  import Logo from '$lib/components/logo.webp';
  import LogoWhite from '$lib/components/logo-w.webp';
</script>

<header>
  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" class="navbar-item logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset={LogoWhite} />
          <img src={Logo} alt="" width="31" height="35" />
        </picture>
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
  <div class="content">
    <h1><a class="footer-logo" href="/">La Cuarta Pared</a></h1>

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
        <h2>Sitios de Interés</h2>
        <ul>
          <li class="footer-link">
            <a href="http://www.redmmt.es/"><span>Red MMT España</span></a>
          </li>
          <li class="footer-link">
            <a href="https://pileusmmt.libsyn.com/">
              <span>The MMT Podcast with Patricia&nbsp;Pino &amp; Christian Reilly</span>
            </a>
          </li>
          <li class="footer-link">
            <a href="https://moneyontheleft.org/">
              <span>Money on the Left</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</footer>
