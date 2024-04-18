<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
  
  </script>
  
  <div>
    <section id="neues-img">
        <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Spiel1.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.board")} </h2>
        </div>
      
      </div>
    </section>
  
    <section id="neues" class="pt-5">
        <div class="container padding-medium pt-0">
            <h2 class="h-6 pt-4">
                {$t("home.board.title")}
            </h2>
    
              <p>
                <span>{$t("home.board.text-1")}</span>
                <a class="text-decoration-underline" href="https://www.bundesfreiwilligendienst.de" target="_blank">{$t("home.board.link-1")}</a>
                <span>{$t("home.board.text-2")}</span>
              </p>
              <p>
                <span>{$t("home.board.text-3")}</span>
                <span>{$t("home.board.text-4")}</span>
              </p>
              <p>
                <span>{$t("board.text-5")}</span>
              </p>
              <p>
                <span>{$t("board.text-6")}</span>
              </p>
              <p>
                {$t("board.text-7")}
                <a href="mailto:info@folli-folletti.de" class="text-decoration-underline">info@folli-folletti.de</a>
                <span> {$t("board.text-8")}</span>
              </p>
        </div>
    </section>
  </div>