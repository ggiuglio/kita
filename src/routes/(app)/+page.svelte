<script>
	import { goto } from "$app/navigation";
  import { t } from "svelte-i18n";
  import { onMount } from 'svelte';
  import * as j from "jquery";
  import Chocolat from "chocolat";

 onMount(async () => {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })

    var swiper = new Swiper(".slider", {
      effect: "fade",
      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
    }); 
  
  });

</script>
    
<section id="slider">
    <div class="swiper slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide d-flex jarallax position-relative"
          style="background-image: url('documents/Boot im Spiel.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

          <div class="d-none d-md-flex justify-content-between position-absolute w-100 px-5 pt-5 mt-5">
            <div> <iconify-icon icon="solar:cloud-sun-2-outline"
                class="icon-float1 text-info-emphasis opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="bi:stars" class="icon-float2 text-warning opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:rainbow" class="icon-float1 text-danger opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:moon" class="icon-float2 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:cloud" class="icon-float1 text-secondary opacity-75"></iconify-icon> </div>
          </div>
          <div class="d-none d-md-flex justify-content-between position-absolute top-50 w-100 px-5 padding-medium pb-0">
            <div></div>
            <div> <iconify-icon icon="ph:rainbow-cloud" class="icon-float2 text-success opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="ion:snow-outline" class="icon-float1 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:ufo-outline"
                class="icon-float2 text-info-emphasis opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:sun-2-outline" class="icon-float1 text-warning opacity-75"></iconify-icon>
            </div>
            <div></div>
          </div>

          <div class="banner-content text-center m-auto" data-aos="zoom-out">
            <h2 class="banner-title display-1 text-white mb-4">Folli Folletti</h2>
            <a on:click={() => goto('uber-uns')} href="#" class="btn btn-primary mt-3">{$t("header.about-us")}</a>
          </div>

        </div>
        <div class="swiper-slide d-flex jarallax position-relative"
          style="background-image: url('documents/Kita Gegenlicht Fenster.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: 25% 75%; height: 80vh;">

          <div class="d-none d-md-flex justify-content-between position-absolute w-100 px-5 pt-5 mt-5">
            <div> <iconify-icon icon="solar:cloud-sun-2-outline"
                class="icon-float1 text-info-emphasis opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="bi:stars" class="icon-float2 text-warning opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:rainbow" class="icon-float1 text-danger opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:moon" class="icon-float2 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:cloud" class="icon-float1 text-secondary opacity-75"></iconify-icon> </div>
          </div>
          <div class="d-none d-md-flex justify-content-between position-absolute top-50 w-100 px-5 padding-medium pb-0">
            <div></div>
            <div> <iconify-icon icon="ph:rainbow-cloud" class="icon-float2 text-success opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="ion:snow-outline" class="icon-float1 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:ufo-outline"
                class="icon-float2 text-info-emphasis opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:sun-2-outline" class="icon-float1 text-warning opacity-75"></iconify-icon>
            </div>
            <div></div>
          </div>

          <div class="banner-content text-center m-auto" data-aos="zoom-out">
            <h2 class="banner-title display-1 text-white mb-0">Elterninitiative</h2>
            <a href="about" class="btn btn-primary mt-3">{$t("header.about-us")}</a>
          </div>
        </div>
        <div class="swiper-slide d-flex jarallax position-relative"
          style="background-image: url('documents/Spielen Autos 2.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: 75% 25%; height: 80vh;">

          <div class="d-none d-md-flex justify-content-between position-absolute w-100 px-5 pt-5 mt-5">
            <div> <iconify-icon icon="solar:cloud-sun-2-outline"
                class="icon-float1 text-info-emphasis opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="bi:stars" class="icon-float2 text-warning opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:rainbow" class="icon-float1 text-danger opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:moon" class="icon-float2 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="ph:cloud" class="icon-float1 text-secondary opacity-75"></iconify-icon> </div>
          </div>
          <div class="d-none d-md-flex justify-content-between position-absolute top-50 w-100 px-5 padding-medium pb-0">
            <div></div>
            <div> <iconify-icon icon="ph:rainbow-cloud" class="icon-float2 text-success opacity-75"></iconify-icon>
            </div>
            <div></div>
            <div> <iconify-icon icon="ion:snow-outline" class="icon-float1 text-white opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:ufo-outline"
                class="icon-float2 text-info-emphasis opacity-75"></iconify-icon> </div>
            <div></div>
            <div> <iconify-icon icon="solar:sun-2-outline" class="icon-float1 text-warning opacity-75"></iconify-icon>
            </div>
            <div></div>
          </div>

          <div class="banner-content text-center m-auto" data-aos="zoom-out">
            <h2 class="banner-title display-1 text-white mb-0">{$t("home.more-than")}</h2>
            <a href="uber-uns" class="btn btn-primary mt-3">{$t("header.about-us")}</a>
          </div>
        </div>

      </div>
      <div class="position-absolute top-0 bottom-0 end-0 m-auto me-0 me-md-5 main-slider-button-next">
        <svg class="arrow-right light-color" width="60" height="60">
          <use xlink:href="#arrow-right"></use>
        </svg>
      </div>
      <div class="position-absolute top-0 bottom-0 start-0 m-auto ms-0 ms-md-5 main-slider-button-prev">
        <svg class="arrow-left light-color" width="60" height="60">
          <use xlink:href="#arrow-left"></use>
        </svg>
      </div>
    </div>
</section>

<section id="categories">
<div class="container padding-medium">
    <div class="row">
    <div class="col my-4 my-lg-0 text-center">
        <a href="#gallery-play" class="categories-item">
        <iconify-icon class="category-icon bg-red text-white p-5 rounded-circle"
            icon="mdi:playground-slide"></iconify-icon>
        <h2 class="mt-2">{$t("home.playground")}</h2>
        </a>
    </div>
    <div class="col my-4 my-lg-0 text-center">
        <a href="#gallery-rooms" class="categories-item">
        <iconify-icon class="category-icon bg-green text-white p-5 rounded-circle"
            icon="material-symbols:house-outline"></iconify-icon>
        <h2 class="mt-2">{$t("home.rooms")}</h2>
        </a>
    </div>
    <div class="col my-4 my-lg-0 text-center">
        <a href="#gallery-activity" class="categories-item">
        <iconify-icon class="category-icon bg-blue text-white p-5 rounded-circle" icon="mdi:art"></iconify-icon>
        <h2 class="mt-2">{$t("home.activity")}</h2>
        </a>
    </div>
    <div class="col my-4 my-lg-0 text-center">
        <a href="#gallery-trip" class="categories-item">
        <iconify-icon class="category-icon bg-yellow text-white p-5 rounded-circle"
            icon="material-symbols:abc-rounded"></iconify-icon>
        <h2 class="mt-2">{$t("home.trips")} </h2>
        </a>
    </div>
    </div>
</div>
</section>

<section id="about-us">
  <div class="container padding-medium pt-0">
    <div class="row align-items-center">
      <div class="col-md-6">
          <div class="imageblock me-md-5">
          <div class="animated-border">
              <img src="documents/Lesen von Oben crop.jpg" 
              alt="img" class="img-fluid rounded-circle ">
          </div>
          </div>
      </div>

      <div class="col-md-6 mt-5 mt-md-0">
        <div class="section-title">
          <h2 class="display-4 mb-3">{$t("home.about-us.title")}</h2>
        </div>
        <div> 
          <div class="pb-2">
          {$t("home.about-us.text")}
          </div>
          {$t("home.about-us.text-2")}
          <ul>
            <li>
              {$t("home.about-us.list-1")}
            </li>
            <li>
              {$t("home.about-us.list-2")}
            </li>
            <li>
              {$t("home.about-us.list-3")}
            </li>
          </ul>
          {$t("home.about-us.close")}
        </div>
        
        <a class="btn btn-primary mt-3" href="uber-uns">Über uns</a>
      </div>
    </div>
</div>
</section>

<section id="board" class="jarallax"
style="background-image: url(images/cta.jpg); background-repeat: no-repeat; background-position: center;">
<div class="container padding-medium" >
  <div class="offset-md-3 col-md-6 text-center ">

    <div class="section-title">
      <h2 class="display-4 mb-3 banner-title" style="color: #3C3C3C">
        {$t("home.board.title")}
      </h2>
    </div>

      <p style="color: #3C3C3C">
        <span>{$t("home.board.text-1")}</span>
        <a class="text-decoration-underline" href="https://www.bundesfreiwilligendienst.de" target="_blank">{$t("home.board.link-1")}</a>
        <span>{$t("home.board.text-2")}</span>
      </p>
      <p style="color: #3C3C3C">
        <span>{$t("home.board.text-3")}</span>
        <span>{$t("home.board.text-4")}</span>
      </p>

      <a class="btn btn-primary mt-3" href="/neues">{$t("home.board.link-2")}</a>

  </div>

</section>

<section id="gallery-play">
  <h2 class="h-6 text-center mb-2">{$t("home.playground")}</h2>
  <div class="container padding-medium pt-0">
    <div class="row entry-container">
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel2.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel2.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel1.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel1.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel3.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel3.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel4.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel4.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel5.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel5.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
    </div>
  </div>
</section>

<section id="gallery-rooms">
  <div class="container padding-medium pt-0">
    <h2 class="h-6 text-center mb-2">{$t("home.rooms")}</h2>
    <div class="row entry-container-raum">
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Raum piccoli.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Raum piccoli.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Kita drinnen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Kita drinnen.jpg"
            class="post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Kita Basteln.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Kita Basteln.jpg"
            class="post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Kita Gegenlicht Fenster.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Kita Gegenlicht Fenster.jpg"
            class="post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Boot im Spiel.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/thumbnails/Boot im Spiel.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Bad hoch.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Bad hoch.jpg"
            class="post-image img-fluid rounded-4"></a>
      </div>
    </div>
  </div>
</section>

<section id="gallery-activity">
  <div class="container padding-medium pt-0">
    <h2 class="h-6 text-center mb-2">{$t("home.activity")}</h2>
    <div class="row entry-container-act">
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Instrumente.MP.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Instrumente.MP.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Lesen seitlich.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Lesen seitlich.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen Autos.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen Autos.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen Bauklotze.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen Bauklotze.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen Eierschalen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen Eierschalen.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen Perlen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen Perlen.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spiel Malen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spiel Malen.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen ausmalen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen ausmalen.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Spielen Malkasten.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Spielen Malkasten.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
     
    </div>
  </div>
</section>

<section id="gallery-trip">
  <div class="container padding-medium pt-0">
    <h2 class="h-6 text-center mb-2">{$t("home.trips")}</h2>
    <div class="row entry-container-trip">
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Draußen laufen.jpg" title="Kindergarten" class="image-link"><img src="documents/thumbnails/Draußen laufen.jpg"
            class=" post-image img-fluid rounded-4"></a>
      </div>
      <div class="entry-item col-md-4 my-3">
        <a href="documents/Wurmer draussen.jpg" title="Kindergarten" class="image-link">
          <img src="documents/thumbnails/Wurmer draussen.jpg" class="post-image img-fluid rounded-4"></a>
      </div>
    </div>
  </div>
</section>