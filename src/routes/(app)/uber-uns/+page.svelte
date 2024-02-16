<script>
  import { onMount } from 'svelte';
  import { t } from "svelte-i18n";

</script>

<div>
  <section id="uber-uns-image">
    <div class="d-flex jarallax position-relative"
        style="background-image: url(images/slider-image1.jpg); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.about-us")}</h2>
        </div>
      
      </div>
  </section>

  <section id="uber-uns" class="pt-5">
    <div class="container padding-medium pt-0">

    <div class="banner-content text-center m-auto" data-aos="zoom-out">
      <h2 class="display-4 mb-4"> Wir sind</h2>
    </div>
    <p class="mb-4">
      Eine deutsch-italienische Eltern-Kind-Initiative
      zwanzig Kinder, dessen Familien die Kita betreiben
    </p>

    <div class="banner-content text-center m-auto" data-aos="zoom-out">
      <h2 class="display-4 mb-4 pt-5"> Unsere Kita</h2>
    </div>
    <p class="mb-4">
      Ist kreativ, bilingual, musikalisch, familiär, bewegungsorientiert und umweltbewusst
      spricht italienisch und deutsch
      isst bewusst und sorgfältig mit SmartCooking (http://smartcooking-berlin.com)
      ist ein Treffpunkt für Alle, die an einem Austausch zwischen deutscher und italienischer Kultur interessiert sind
      
    </p>
    <div class="banner-content text-center m-auto" data-aos="zoom-out">
      <h2 class="display-4 mb-4 pt-5"> Gemeinsam</h2>
    </div>
    <p class="mb-4">
      Engagieren wir uns für unsere Kita
      tauschen wir uns aus und helfen uns bei kleineren Problemen
      sprechen wir sehr gerne Italienisch und gehen auch mal einen Kaffee trinken
      Folli Folletti ist eine anerkannte Kita und funktioniert mit dem Berliner Kita-Gutschein
    </p>
    <p>
      Nähere Informationen zur  Beantragung eines Kita-Gutscheins erhalten Sie am Berliner Serviceportal
    </p>
  </div>
  </section>
</div>