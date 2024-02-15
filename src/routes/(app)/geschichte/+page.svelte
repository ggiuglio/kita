<script>
    import * as j from "jquery";
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";

    onMount(async () => {
  
      AOS.init({
        duration: 1000,
        once: true,
    })
  
    });
  
  </script>
  
  <div>
    <section id="geschichte-img">
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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.history")}</h2>
        </div>
      
      </div>
    </section>
  
    <section id="geschichte" class="pt-5">
      <div class="container padding-medium pt-0">
  
      <div class="banner-content text-center m-auto" data-aos="zoom-out">
        <h2 class="display-5 mb-4">
            Wir wollten doch bloß spielen
        </h2>
      </div>
      <p>
        Zunächst ahnten wir nicht, wie viele italienische Mamas oder Papas mit ihren Kindern im Prenzlauer Berg leben.
         Doch bald fanden immer mehr Eltern zueinander und trafen sich in der deutsch-italienischen Spielgruppe  „La Nave Gelsomina“ .
      </p>

      <div class="banner-content text-center m-auto mt-8" data-aos="zoom-out">
        <h2 class="display-5 mb-4 pt-5">
            Gemeinsam lösen wir die K-Frage
        </h2>
      </div>
      <p>
        <b>"Habt ihr auch noch keinen Kita-Platz? Und wäre es nicht schön, wenn unsere Kinder auch mit Papas oder Mamas ,Muttersprache' aufwachsen würden?“</b>  
        Die Idee war geboren: Wir eröffnen eine eigene Kita! Dort kann jeder italienisch UND deutsch sprechen. Ist das nicht verrückt? Ganz und gar nicht - und doch ein bisschen.
        </p>
      <p class="mb-4">
        Gesagt getan - im Sommer 2010 haben sich einige Familien zum Verein „Folli Folletti e.V.“ 
        zusammengetan und nach arbeitsreichen Monaten viel erreicht: Mit Freude und Stolz blicken wir auf die gelungene Eröffnung der Kita 
        in der Cantianstraße 15 am 8. September 2011 zurück. In unserer Kita betreuen vier qualifizierte Erzieherinnen und Erzieher italienischer 
        und deutscher Herkunft zwanzig „verrückte Wichtel“ zwischen ein und sechs Jahren, dazu kommen Zivildienstleistende, Praktikanten und Auszubildende, 
        so dass wir oft einen Betreuungsschlüssel von 1:3 haben.
      </p>
     
      <div class="banner-content text-center m-auto" data-aos="zoom-out">
        <h2 class="display-5 mb-4 pt-5">
            In Kürze: Das ist uns wichtig
        </h2>
      </div>
      <p>
        Wir haben einen kreativen, bilingualen, bewegungsorientierten, umweltbewussten und familiären Kindergarten gebaut. Als Elterninitiativkita (EKT) setzen wir auf das 
        Engagement der Eltern sowie auf Transparenz und einen guten Dialog zwischen Erziehern und Eltern. Zusätzlich verstehen wir den Verein und die Kita als Treffpunkt für alle, 
        die an einem Austausch zwischen deutscher und italienischer Kultur interessiert sind
        <a href="/konzeption">Die Konzeption finden Sie hier (Stand Oktober 2013????)</a>.
      </p>
      <p>
        Kleine Beiträge - große Wirkung Ohne den Einsatz von vielen Menschen wäre unsere Kita undenkbar. Vielen Dank an alle kleinen und großen Hände, 
        die kraftvoll angepackt haben und zum Erfolg unseres Projekts beigetragen.
      </p>
      <p>
        Sie können Fördermitglied werden, indem Sie diesen <a>Aufnahmeantrag</a> ausdrucken und ihn per Email oder per Post an uns schicken.
        Gerne können Sie den Vorstand des Vereins kontaktieren (info[at]folli-folletti.de), der Ihnen für weitere Fragen zur Verfügung steht. 
        <a>Die Satzung unseres Vereins können Sie hier</a> nachlesen.
      </p>
      </div>
    </section>
  </div>