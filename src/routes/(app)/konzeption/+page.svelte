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
    <section id="konzeption-img">
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
            <h2 class="banner-title display-1 text-white mb-5">Konzeption</h2>
        </div>
      
      </div>
    </section>
  
    <section id="konzeption" class="pt-5">
      <div class="container padding-medium pt-0">
  
      <p class="mb-4">
        Wir arbeiten nach dem <a>Berliner Bildungsprogramm </a> und sehen jedes Kind als eigenständige Persönlichkeit 
        in seiner Einzigartigkeit, dessen Bedürfnisse und Interessen es zu erkennen gilt, um es entsprechend zu 
        fördern und in seiner Entwicklung zu unterstützen.
      </p>

      <p class="mb-4">
        Die Förderung der Zweisprachigkeit und des Verständnisses für beide Kulturen ist ein wesentlicher Punkt der pädagogischen Arbeit. 
        „Eine Person, eine Sprache“ (d.h. eine ErzieherIn spricht durchgängig deutsch, die andere  durchgängig italienisch mit den Kindern) 
        ist das Prinzip, nach dem in der Kita die ErzieherInnen mit den Kindern kommunizieren und zwar in ihrer jeweiligen Muttersprache. 
        Beim Erlernen der Sprache richtet sich unsere Kita nach der Methode des Immersionsansatzes, die die Sprache in die Alltagssituation und ins Spiel einbindet.
      </p>

      <p class="mb-4">
        Im Kitaalltag werden die Themen der Kinder aufgegriffen, Anregungen der Kinder wahrgenommen und in der Projektarbeit umgesetzt. Die Kita versteht sich als 
        gemeinsamer Lern- und Lebensraum für Kinder und ErzieherInnen in einer familienähnlichen und vertrauensvollen Atmosphäre. Respekt, Rücksichtnahme, Toleranz 
        und ein soziales Miteinander sind wichtige Aspekte im Alltag. Wesentliche Ziele in der pädagogischen Arbeit sind die Entwicklung von Selbstvertrauen, Selbstbewusstsein, 
        Selbstständigkeit, Kompromissbereitschaft, Konfliktfähigkeit, Akzeptanz und eine partnerschaftliche Zusammenarbeit mit den Eltern.
      </p>

      </div>
    </section>
  </div>