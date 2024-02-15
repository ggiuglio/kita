<script>
    import * as j from "jquery";
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";

  </script>
  
  <div>
    <section id="impressum-img">
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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.contacts")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="impressum" class="pt-5">
      <div class="container padding-medium pt-2 pb-4 m-auto" >

        <div class="row" style="min-height: 600px;">
          <div class="col-md-3">
            <div>Folli Folletti</div>
            <div class="mt-2"> Cantianstraße 15</div>
            <div class="mt-2"> 10437 Berlin</div>
            <div class="mt-2">E-mail: info@folli-folletti.de</div>
            <div class="mt-2">
                <ul class="list-unstyled gap-2 m-0">
                    <li class="social">
                        Folge uns auf  
                      <a href="https://www.facebook.com/people/Folli-Folletti-eV/100064738174464">
                        Facebook
                        <iconify-icon class="social-icon p-1 align-bottom" icon="ri:facebook-fill"></iconify-icon>
                      </a>
                    </li>
                </ul>
              
            </div>
          </div>
          <div class="col-md-9">
            <iframe
            title="Folli Folletti"
            style="border: 0; width: 100%; height:100%;"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            class="w-full h-full rounded-md"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBpFtdVVwt5e3X8yvjybvcCdyAg3c6tUtg&q=Cantianstraße 15, 10437 Berlin`}
          />
          </div>
        </div>
      </div>
    </section>
  </div>