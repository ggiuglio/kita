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
  
      <p class="mb-4">
        Alle Eltern der Kinder, die die Kita Folli Folletti besuchen, sind Mitglieder des Vereins Folli Folletti, der sich mehrmals im Jahr trifft.
 
        Was ist eine Kita Elterniniative?
         
        Das ist ein Kindergarten, der von Eltern gegründet wurde und geleitet wird. Im Fall von Folli Folletti engagieren sich die Eltern jeden Monat rund zwei Stunden lang für den Kindergarten.
         
        Was unterscheidet eine Elterninitiative von anderen öffentlichen Kindergärten?
         
        Die Eltern sind für den Betrieb des Kindergartens verantwortlich.
         
        Was sind die Aufgaben der Eltern?
         
        Die Aufgaben der Eltern sind vielfältig und werden zu Beginn eines jeden Schuljahres gleichmäßig verteilt. Zu den Aufgaben gehören:
        
      </p>

        <ul>
            <li>
                Suche nach Assistenten, Vertretern, Praktikanten
            </li>
            <li>
                Kontakte mit Institutionen, Arbeitsverträge, rechtliche Fragen
            </li>
            <li>
                Internetauftritt
            </li>
            <li>
                Übersetzungen
            </li>
            <li>
                Organisation des Caterings für die Mittagsverpflegung 
            </li>
            <li>
                Einkaufen
            </li>
            <li>
                Organisation von Elternschichten
            </li>
            <li>
                Kalender
            </li>
            <li>
                Organisation der Reinigung
            </li>
            <li>
                Organisation von Festen
            </li>
            <li>
                Einkauf von Geschenken
            </li>
            <li>
                Reparaturen und Instandhaltung
            </li>
            <li>
                Raumgestaltung
            </li>
            <li>
                Waschen der Lätzchen
            </li>
            <li>
                Elterndienst
            </li>
        </ul> 
      <p>
         
        Was ist ein Vorstand?
         
        Vorstand bedeutet "Verwaltungsrat". Der Vorstand besteht aus vier Elternteilen, die jährlich von der Vereinsversammlung gewählt werden.
         
        Die Hauptaufgaben sind:
    </p>
    <ul>
        <li>
            Finanzen
        </li>
        <li>
            Interne und externe Kommunikation
        </li>
        <li>
            Verteilung der Projekte und Auswahl der Kinder
        </li>
        <li>
            Beziehungen zum Personal (Personalwesen)
        </li>
    </ul>
         
    <p>
        Was ist ein Elterndienst?
            
        An einem Nachmittag im Monat (mittwochs) sind die Erzieherinnen und Erzieher bei einer Sitzung außerhalb des Kindergartens beschäftigt. Daher sind zwei Eltern etwa drei Stunden lang für die beiden Kindergruppen und den Kindergarten verantwortlich.

    </p>
  
      </div>
    </section>
  </div>