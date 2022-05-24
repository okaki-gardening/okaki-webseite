import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-gray-500">
    <Section
      title="KI im Garten"
      description="okaKI übernimmt die Gartenbewässerung für Dich."
      title-color="bg-gray-100"
    >
      <VerticalFeatureRow
        title="Feuchtigkeits-Sensoren"
        description="Moderne, kapazitive Sensoren messen die Feuchtigkeit des Bodens und übertragen die Messwerte wahlweise über LoRaWAN oder im Mobilfunknetz mit NB-IoT."
        image="/assets/images/okaki_icons-03.svg"
        imageAlt="Feuchtigkeitssensoren"
      />
      <VerticalFeatureRow
        title="Krasse Ventile"
        description="Ventile können bei Bedarf geöffnet und geschlossen werden. Auch sie kommunizieren über LoRaWAN oder NB-IoT."
        image="/assets/images/okaki_icons-04.svg"
        imageAlt="Smarte Ventile"
        reverse
      />
      <VerticalFeatureRow
        title="Kameras"
        description="Kameras mit KI erkennen Dürre, Sonneneinstrahlung, Überschwemmungen und mehr. Die ausgewerteten Daten werden über LoRaWAN oder NB-IoT übermittelt. Bilddateien übertragen wir nicht, die Privatsphäre ist gesichert!"
        image="/assets/images/okaki_icons-05.svg"
        imageAlt="Kameras"
      />
      <VerticalFeatureRow
        title="Die okaKI Box"
        description="In dieser wetterfesten Box befinden sich weitere Sensoren, die lokal die Temperatur, Luftfeuchtigkeit, Feinstaub und UV-Strahlung messen. LoRaWAN Pakete werden empfangen und über das Mobilfunknetz oder über WLAN weitergeleitet."
        image="/assets/images/okaki_icons-01.svg"
        imageAlt="Die okaKI Box"
        reverse
      />
      <VerticalFeatureRow
        title="Apps"
        description="Über die Web-App oder über die Smartphone App für Apple oder Android können alle Sensorwerte angezeigt, Regeln editiert und der Zustand des Systems überwacht werden. Alarme erreichen Dich per Push-Notification."
        image="/assets/images/okaki_icons-02.svg"
        imageAlt="Apps"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
