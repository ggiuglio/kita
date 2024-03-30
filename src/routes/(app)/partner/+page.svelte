<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
    import { goto } from "$app/navigation";

  </script>
  
  <div>
    <section id="partner-img">
        <div class="d-flex jarallax position-relative"
        style="background-image: url('documents/Partner 2.jpg'); background-size: cover; background-repeat: no-repeat; height: 80vh; background-position: center; height: 80vh;">

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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.partner")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="partner" class="pt-5">
      <div class="container padding-medium pt-0">
  
      <h2 class="h-6 mb-4">
        {$t("partner.title")}
      </h2>

      <div class="mb-4">
        {$t("partner.text-1")}
      </div>

      <ul>
          <li>
              Stiftung Pfefferwerk – Fehrbelliner Straße 92  –
                10119 Berlin  – Tel. 030/ 67 30 54 54/-5  – Fax  030/ 67 30 54 56 www.stpw.org 
                info@stpw.org
          </li>
          <li>
              Veolia Stiftung Lindencorso – Unter den Linden 21- 10117 Berlin T: +49 30 53 65 82 40
                mailto:info@veolia-stiftung.de http://www.veolia-stiftung.de 
                http://twitter.com/VeoliaStiftung http://www.facebook.com/VeoliaStiftung
          </li>
          <li>
              IVM Chemicals GmbH – Johannes-Kepler-Str. 3    D-71083 Herrenberg – Fon: +49 (0) 7032 2006-20
                – Fax: +49 (0) 7032 2006-8820 – http://www.ivmchemicals.de/
          </li>
          <li>
              Verba Volant – Verein zur Förderung mehrsprachiger Bildung e.V. http://www.verbavolant-ev.de
          </li>
          <li>
              Si – Scuola Italiana Centro culturale italo-tedesco/Deutsch-italienisches Kulturzentrum Dunckerstr.
                62 10439 Berlin 0049 30 44036975 
                nfo@si-scuolaitaliana.de www.si-scuolaitaliana.de
          </li>
          <li>
              Deutsch-italienische Handelskammer – Märkisches Ufer 28 – 10179 Berlin 
              – 030/24 31 04 0 – info@itkam.de
          </li>
          <li>
              Mondo Azul http://www.mundoazul.de
          </li>
          <li>
              Mondo Libro http://www.mondolibro.de
          </li>
      </ul> 
     
      <p>   
        {$t("partner.text-2")}
      </p>
      <p>
        {$t("partner.text-3")} 
        <a on:click={() => goto("/spenden")} href="#" class="text-decoration-underline">
          {$t("partner.link-1")}
        </a>
      </p>

      </div>
    </section>
  </div>