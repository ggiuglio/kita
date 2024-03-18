<script>
    import * as j from "jquery";
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";

    onMount(async () => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  
  </script>
  
  <div>
    <section id="verein-img">
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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.association")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="verein" class="pt-5">
      <div class="container padding-medium pt-0">

        <h2 class="h-6">
            {$t("association.title-1")}
        </h2>
        <p class={"mb-4"}>
            {$t("association.text-1")}
            <br />
            {$t("association.text-1-1")}
            <a href="documents/satzung.pdf" class="text-decoration-underline" download> {$t("association.link-1-1")} </a>
        </p>

        <h2 class="h-6 pt-4">
            {$t("association.title-2")}

        </h2>
        <p class={"mb-4"}>
            {$t("association.text-2")}
        </p>

        <h2 class="h-6 pt-4">
            {$t("association.title-3")}

        </h2>
        <p class={"mb-4"}>
            {$t("association.text-3")}
        </p>

        <h2 class="h-6 pt-4">
            {$t("association.title-4")}

        </h2>
        <p class={"mb-2"}>
            {$t("association.text-4")}
        </p>
        <ul class={"mb-4"}>
            <li>
                {$t("association.list-1")}
            </li>
            <li>
                {$t("association.list-2")}
            </li>
            <li>
                {$t("association.list-3")}
            </li>
            <li>
                {$t("association.list-4")}
            </li>
            <li>
                {$t("association.list-5")}
            </li>
            <li>
                {$t("association.list-6")}
            </li>
            <li>
                {$t("association.list-7")}
            </li>
            <li>
                {$t("association.list-8")}
            </li>
            <li>
                {$t("association.list-9")}
            </li>
            <li>
                {$t("association.list-10")}
            </li>
            <li>
                {$t("association.list-11")}
            </li>
            <li>
                {$t("association.list-12")}
            </li>
            <li>
                {$t("association.list-13")}
            </li>
            <li>
                {$t("association.list-14")}
            </li>
            <li>
                {$t("association.list-15")}
            </li>
        </ul> 

        <h2 class="h-6 pt-4">
            {$t("association.title-5")}
        </h2>
        <p>
            {$t("association.text-5")}
       <br />
            {$t("association.text-6")}
        </p>
        <ul class="mb-4">
            <li>
                {$t("association.list-15-1")}
            </li>
            <li>
                {$t("association.list-16")}
            </li>
            <li>
                {$t("association.list-17")}
            </li>
            <li>
                {$t("association.list-18")}
            </li>
        </ul>
         
        <h2 class="h-6 pt-4">
            {$t("association.title-7")}
        </h2>
        <div>   
            {$t("association.text-7")}
        </div>
  
      </div>
    </section>
  </div>