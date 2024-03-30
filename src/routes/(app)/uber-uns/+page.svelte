<script>
  import { onMount } from 'svelte';
  import { t } from "svelte-i18n";

</script>

<div>
  <section id="uber-uns-image">
    <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Kita Basteln Fenster ohne Paolo.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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

    <h2 class="h-6"> 
      {($t("about-us.title-1"))}
   </h2>

    <p class="mb-4">
      {($t("about-us.text-1"))}
    </p>

    <h2 class="h-6 pt-4">
      {($t("about-us.title-2"))}
    </h2>
    <p class="mb-4">
      {($t("about-us.text-2"))}
    </p>

    <h2 class="h-6 pt-4">
      {($t("about-us.title-3"))}
    </h2>
    <p class="mb-4">
      {($t("about-us.text-3-1"))}
    </p>
    <ul>
      <li>
        {($t("about-us.link-1"))}
      </li>
      <li>
        {($t("about-us.link-2"))}
      </li>
      <li>
        {($t("about-us.link-3"))}
      </li>
      <li>
        {($t("about-us.link-4"))}
      </li>
      <li>
        {($t("about-us.link-5"))}
      </li>
      <li>
        {($t("about-us.link-6"))}
      </li>
    </ul>
    <p class="mb-4">
      {($t("about-us.text-3-2"))}
    </p>

    <h2 class="h-6 pt-4">
      {($t("about-us.title-4"))}
    </h2>
    <p class="mb-4">
      {($t("about-us.text-4"))}
    </p>

    <p class="mb-2">
      {($t("about-us.text-5"))} <br />
        {($t("about-us.text-6"))}
    </p>

    <p>
    </p>
  </div>
  </section>
</div>