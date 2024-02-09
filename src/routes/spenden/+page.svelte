<script>
    import * as j from "jquery";
    import { onMount } from 'svelte';
  
    onMount(async () => {
  
      AOS.init({
        duration: 1000,
        once: true,
    })
  
  
    });
  
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
            <h2 class="banner-title display-1 text-white mb-5">Spenden</h2>
        </div>
      
      </div>
    </section>
  
    <section id="spenden" class="pt-5">
      <div class="container padding-medium pt-0">
  
      <div class="banner-content text-center m-auto" data-aos="zoom-out">
        <h2 class="display-5 mb-4">
            Bisherige Spender/Sponsoren
        </h2>
      </div>
      <p class="mb-4">
        Durch die Mitwirkung vieler Partner konnten wir wichtige Projekte umsetzen und die Kita weiter ausbauen: siehe die Seite unserer
        <a href="/partner">Partner</a>
      </p>

      <div class="banner-content text-center m-auto" data-aos="zoom-out">
        <h2 class="display-5 mb-4 pt-5">
            Spender und Sponsorensuche
        </h2>
      </div>
      <p>   
        Als gemeinnütziger Verein wird das Projekt „Folli Folletti“ hauptsächlich von uns Eltern getragen.
         Darüber hinaus freuen wir uns über Menschen, die unsere Idee der deutsch-italienischen Kinder-Begegnungsstätte unterstützen.
      </p>
      <p>
        Helfen können Sie uns durch:
      </p>
      <ul>
        <li>
            <b>Eine einmalige Spende.</b> Bitte kontaktieren Sie dafür unseren Vorstand / Die Bankverbindung lautet

        </li>
      </ul>

      </div>
    </section>
  </div>