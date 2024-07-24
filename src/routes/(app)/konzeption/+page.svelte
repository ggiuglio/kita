<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";

  </script>
  
  <div>
    <section id="konzeption-img">
        <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Spielen Bauklotze.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.concept")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="konzeption" class="pt-5">
      <div class="container padding-medium pt-0">
  
        <p class="mb-4">
          {$t("concept.text-1")}
          <a href="https://www.berlin.de/sen/jugend/familie-und-kinder/kindertagesbetreuung/berliner_bildungsprogramm_2014.pdf?ts=1699956340" download class="text-decoration-underline">{$t("concept.link-1")}</a>
          {$t("concept.text-2")}
        </p>

        <p class="mb-4">
          {$t("concept.text-3")}
        </p>

        <p class="mb-4">
          {$t("concept.text-4")}
        </p>

        <div class="mb-4">
            {$t("concept.text-5")}
            <div>
              {$t("concept.text-6")}
              <ul>
                <li>
                  {$t("concept.list-1")}
                </li>
                <li>
                  {$t("concept.list-2")}
                </li>
                <li>
                  {$t("concept.list-3")}
                </li>
              </ul>
            </div>
          </div>

      </div>
    </section>
  </div>