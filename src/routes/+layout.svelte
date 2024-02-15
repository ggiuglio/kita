
<script>
  import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
import "$lib/i18n/i18n";
	import { onMount } from "svelte";

  import { t, locales, locale, isLoading as loadingTranslations } from "svelte-i18n";

  onMount(() => {
    if (localStorage.getItem("language"))
      $locale = localStorage.getItem("language");
  });

  const onChangeLanguage = (lang) => {
    localStorage.setItem("language", lang);
  };

  $: console.log("lang", $locale);
</script>

<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
  <script src="js/jquery-1.11.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="js/plugins.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/vendor.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Lora:wght@400;500;700&display=swap"
    rel="stylesheet">
  
</svelte:head>


<header >
  <nav class="header-top bg-dark py-1">
      <div class="container">
      <div class="d-flex flex-wrap justify-content-between align-items-center">
          <ul class="info d-flex flex-wrap list-unstyled m-0">
          <li class="location text-capitalize text-white d-flex align-items-center me-4">
              <svg class="me-1" width="18" height="18">
              <use xlink:href="#location"></use>
              </svg>Cantianstraße 15 | 10437 Berlin
          </li>
          <li class="email text-capitalize text-white d-flex align-items-center me-4">
              <svg class="me-1" width="18" height="18">
              <use xlink:href="#email"></use>
              </svg>E-mail: info@folli-folletti.de
          </li>

          </ul>
          <div class="social">
          <ul class="info d-flex flex-wrap list-unstyled m-0">
              <li class="social-icon text-white d-flex align-items-center me-3">
              <a href="https://www.facebook.com/people/Folli-Folletti-eV/100064738174464" target="_blank">
                Facebook  
                <svg width="20" height="20" class="align-middle">
                  <use xlink:href="#facebook"></use>
                </svg> </a>
              </li>
              <li>
                <div>
                  <select class="rounded px-1 h6 mb-0"
                    bind:value={$locale}
                    on:change={(e) => onChangeLanguage(e.target.value)}
                   >
                 
                    <option value="Deutsch">🇩🇪  Deutsch</option>
                    <option value="Italiano">🇮🇹  Italiano</option>
                  </select>
                </div>
              </li>
          </ul>
          </div>
      </div>
      </div>
  </nav>

  <nav id="primary-header" class="navbar navbar-expand-lg py-3">
      <div class="container">
      <a class="navbar-brand" href="/">
          <img src="images/folli-folletti-logo.png" style="width: 250px" class="logo img-fluid">
      </a>
      <button class="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false">
          <svg class="navbar-icon" width="60" height="60">
          <use xlink:href="#navbar-icon"></use>
          </svg>
      </button>
      <div class="header-bottom offcanvas offcanvas-end" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
          <div class="offcanvas-header px-4 pb-0">
          <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"
              data-bs-target="#bdNavbar"></button>
          </div>
          <div class="offcanvas-body align-items-center justify-content-end">
          <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item px-3 py-2 py-lg-0">
              <a class="nav-link active p-0" aria-current="page" on:click={() => goto('/')} href="#" data-bs-dismiss="offcanvas">Home</a>
              </li>
              <li class="nav-item px-3 py-2 py-lg-0 dropdown">
              <a class="nav-link p-0 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                  aria-expanded="false"> {$t("header.about-us")}</a>
              <ul class="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                  <li class="py-1"><a on:click={() => goto('verein')}  href="#" class="dropdown-item" data-bs-dismiss="offcanvas" target="_blank">{$t("header.association")}</a></li>
                  <li class="py-1"><a on:click={() => goto('partner')} href="#" class="dropdown-item" data-bs-dismiss="offcanvas">{$t("header.partner")} </a></li>
                  <li class="py-1"><a on:click={() => goto('/spenden')} href="#" class="dropdown-item" data-bs-dismiss="offcanvas">{$t("header.donations")} </a></li>
                  <li class="py-1"><a on:click={() => goto('geschichte')} href="#" class="dropdown-item" data-bs-dismiss="offcanvas">{$t("header.history")} </a></li>
              </ul>
              </li>
              <li class="nav-item px-3 py-2 py-lg-0">
              <a class="nav-link p-0" on:click={() => {goto('/konzeption')}} href="#">{$t("header.concept")} </a>
              </li>
              <li class="nav-item px-3 py-2 py-lg-0">
              <a class="nav-link p-0" on:click={() => goto('anmeldung')} href="#" data-bs-dismiss="offcanvas">{$t("header.registration")} </a>
              </li>
              <li class="nav-item px-3 py-2 py-lg-0">
              <a class="nav-link p-0" on:click={() => goto("/impressum")} href="#" data-bs-dismiss="offcanvas">{$t("header.contacts")} </a>

              </li>
              
          </ul>
          </div>
      </div>
      </div>
  </nav>
</header>


<slot />

<footer id="footer" class="bg-gray">
  <div class="container text-center padding-medium">
    <a class="navbar-brand w-25" href="/">
      <img src="images/folli-folletti-logo.png" style="width: 250px" class="logo img-fluid">
    </a>
    <ul class="info text-center list-unstyled mt-4">
      <li class="location text-capitalize mb-2 d-flex justify-content-center align-items-center">
        <svg class="text-primary me-1" width="18" height="18">
          <use xlink:href="#location"></use>
        </svg>Cantianstraße 15 | 10437 Berlin
      </li>
      <li class="email text-capitalize mb-2 d-flex justify-content-center align-items-center">
        <svg class="text-primary me-1" width="18" height="18">
          <use xlink:href="#email"></use>
        </svg>E-mail: info@folli-folletti.de
      </li>
      
      <li class="clock text-capitalize mb-2 d-flex justify-content-center align-items-center">
        <svg class="text-primary me-1" width="18" height="18">
          <use xlink:href="#clock"></use>
        </svg> 8 bis 17 Uhr geöffnet. Freitags von 8 bis 16 Uhr.
      </li>
    </ul>
    <div>
      <ul class="d-flex justify-content-center list-unstyled gap-2 m-0">
        <li class="social">
          <a href="https://www.facebook.com/people/Folli-Folletti-eV/100064738174464">
            Facebook
            <iconify-icon class="social-icon align-bottom p-1" icon="ri:facebook-fill"></iconify-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="bg-gray border-top">
    <div class="text-center py-4">
      <p class="mb-0">©2024 Kindergarten. Free HTML Template by: <a href="https://templatesjungle.com/"
          target="_blank" class="text-decoration-underline fw-semibold"> TemplatesJungle</a></p>
    </div>
  </div>
</footer>
    
