<script>
    import { onMount } from 'svelte';
    import { t } from "svelte-i18n";
  
  </script>
  
  <div>
    <section id="anmeldung-img">
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
            <h2 class="banner-title display-1 text-white mb-5">{$t("header.registration")} </h2>
        </div>
      
      </div>
    </section>
  
    <section id="anmeldung" class="pt-5">
      <div class="container padding-medium pt-0">
  
        <p class="mb-4">
            Folli Folletti ist eine kleine EKT, die 20 Kinder ab 1 Jahr bis zum Schuleintritt betreut. Für jeden Jahrgang gibt es 4 Kinder: 2 Mädchen und 2 Jungs. 
            Jedes Jahr gibt es deswegen nur 4 neue Plätze für einjährige Kinder. Davon sind aber manchmal einige schon an Geschwisterkinder vergeben. 
            Es kommt manchmal vor, dass einige Plätze im Laufe des Jahres frei werden, weil z.B. eine Familie wegzieht.
        </p>

        <p class="mb-4">
            Um bei Folli Folletti aufgenommen zu werden, braucht man nicht nur Glück, sondern sollte auch Zeit und Lust haben, aktiv an der Kitagestaltung teilzunehmen 
            (z.B. Elterndienst im Fall von Abwesenheit der ErzieherInnen, handwerkliche Hilfe bei Reparaturen, Wäschedienst usw.).
        </p>

        <p class="mb-4">
            Bitte lassen Sie uns Ihre Daten zukommen (Vor- und Nachname und Geburtsdatum des Kindes, Kontaktdaten von mindestens einem Elternteil und einen kurzen Vorstellungsbrief). 
            Wir werden uns dann mit Ihnen in Kontakt setzen.
        </p>

        <p class="mb-4">
            Bitte beachten Sie, dass die Kita sehr klein ist und die Kitaplätze wesentlich weniger sind als die Nachfrage, deswegen ist die Auswahl der Kinder extrem schwierig.
        </p>

        <p>
            <b>WICHTIGE INFO: Für Kinder, die 2022 geboren sind, sind bereits alle Plätze vergeben.  
            </b>
        </p>

        <h2 class="h-6 mb-4 pt-5">
            Infos
        </h2>
      
        <ul>
            <li>
                Öffentliche Elterninitiativkita
            </li>
            <li>
                20 Kinder zwischen 1 und 6 Jahren
            </li>
            <li>
                4 Kinder, davon 2 Mädchen und 2 Jungs, für jeden Jahrgang
            </li>
            <li>
                Die Kinder sind auf 2 Gruppen verteilt: 8 Kinder von 1 bis 3 Jahre und 12 Kinder von 3 bis 6 Jahre
            </li>
            <li>
                Je 2 ErzieherInnen pro Gruppe, dazu kommen Zivildienstleistende, PraktikantInnen, Auszubildende
            </li>
        </ul>
        
      </div>
    </section>
  </div>