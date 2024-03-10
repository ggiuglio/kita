<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
  	import { goto } from "$app/navigation";

  </script>
  
  <div>
    <section id="spenden-img">
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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.donations")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="spenden" class="pt-5">
      <div class="container padding-medium pt-0">
  
      <h2 class="h-6">
        {($t("donations.title-1"))}
      </h2>
      <p class="mb-4">
        {($t("donations.text-1"))}
        <a href="/partner" class="text-decoration-underline">Partner.</a>
      </p>

      <h2 class="h-6 pt-4">
        {($t("donations.title-2"))}
      </h2>
      <p class="mb-4">
        {($t("donations.text-2"))}
        <br />
      </p>
        
      {($t("donations.text-3"))}
      <ul>
        <li>
          {($t("donations.list-1"))}
        </li>
        <li>
          {($t("donations.list-2"))}
        </li>
        <li>
          {($t("donations.list-3"))}
        </li>
        <li>
          {($t("donations.list-4"))}
        </li>
      </ul>

      <div>
          {($t("donations.text-4"))}
      </div>

      <ul class="pb-2">
        <li>
          {($t("donations.list-5-1"))}  
            <b> 
              {($t("donations.list-5-bold"))}
            </b> 
            {($t("donations.list-5-2"))}
        </li>
        <li>
          {($t("donations.list-6-1"))}
          <b>
            {($t("donations.list-6-bold"))}
          </b>
          {($t("donations.list-6-2"))}
          <a href="documents/vereinsmitgliedschaft.pdf"  class="text-decoration-underline" download>
            {($t("donations.list-6-link-1"))}
          </a>
          {($t("donations.list-6-3"))}
          <a href="documents/satzung.pdf" class="text-decoration-underline" download>
            {($t("donations.list-6-link-2"))}
          </a>
        </li>
      </ul>

      <div class="pb-2">
        {($t("donations.text-5"))}
      </div>
      <div class="pb-2">
        {($t("donations.text-6"))}
      </div>
      <div class="pb-2 text-center">
        {($t("donations.text-7" ))}
      </div>
      <div class="pb-2 text-center">
        Folli Folletti e.V.
      </div>
     
      </div>
    </section>
  </div>