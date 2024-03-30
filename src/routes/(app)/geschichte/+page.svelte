<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
  
  </script>
  
  <div>
    <section id="geschichte-img">
        <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Lesen viel Hintergrund.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.history")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="geschichte" class="pt-5">
      <div class="container padding-medium pt-0">
  
        <h2 class="h-6">
          {$t("history.title-1")}
        </h2>
        <p class="mb-4">
          {$t("history.text-1")}
          <a href="http://it-it.facebook.com/lanavegelsomina" class="text-decoration-underline"> {$t("history.link-1")}</a>
        </p>

        <h2 class="h-6 pt-4">
          {$t("history.title-2")}
        </h2>
        <p class="mb-2">
          <b>
            “{$t("history.text-2")}”
          </b>  
          <br />
          {$t("history.text-3")}         
        </p>
        <p class="mb-4">
          {$t("history.text-4")} 
        </p>
      
        <h2 class="h-6 pt-4">
          {$t("history.title-3")} 
        </h2>

        <p class="mb-4">
          {$t("history.text-5")} <br />
          {$t("history.text-6")}
        </p>

        <h2 class="h-6 pt-4">
          {$t("history.title-4")}
        </h2>
        <p class="mb-2">
          {$t("history.text-7")}
        </p>
        <p class="mb-4">
          {$t("history.text-8")}
          <a href="documents/vereinsmitgliedschaft.pdf" class="text-decoration-underline" download>
            {$t("history.link-3")}
          </a>
          {$t("history.text-9")}
          <a href="documents/satzung.pdf" class="text-decoration-underline" download>
            {$t("history.link-4")}
          </a>
          {$t("history.text-10")}
        </p>
      </div>
    </section>
  </div>