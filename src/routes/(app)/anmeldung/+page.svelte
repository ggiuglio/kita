<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
  
  </script>
  
  <div>
    <section id="anmeldung-img">
        <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Kita drinnen.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.registration")} </h2>
        </div>
      
      </div>
    </section>
  
    <section id="anmeldung" class="pt-5">
      <div class="container padding-medium pt-0">
  
        <p class="mb-4">
            {$t("registration.text-1")} 
        </p>

        <p class="mb-4">
            {$t("registration.text-2")} 
       </p>

        <p class="mb-4">
            {$t("registration.text-3")} 
        </p>

        <p class="mb-4">
            {$t("registration.text-4")} 
        </p>

        <p>
            <b>
                {$t("registration.text-5")} 
            </b>
        </p>

        <h2 class="h-6 mb-4 pt-5">
            {$t("registration.title-1")} 
        </h2>
      
        <ul>
            <li>
                {$t("registration.list-1")} 
            </li>
            <li>
                {$t("registration.list-2")} 
            </li>
            <li>
                {$t("registration.list-3")} 
            </li>
            <li>
                {$t("registration.list-4")} 
            </li>
            <li>
                {$t("registration.list-5")} 
            </li>
        </ul>
        
      </div>
    </section>
  </div>