import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Einloggen</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-0 pb-0">
      <img
        src="/assets/images/background.png"
        alt="background image shows a nice garden and the okaKI Logo"
      ></img>
    </Section>

    <Section yPadding="pt-10 pb-32">
      <HeroOneButton
        title={
          <>
            {'Künstliche Intelligenz für\n'}
            <span className="text-primary-500">Smarte Gärten</span>
          </>
        }
        description="Die einfachste Art, mit Open-Source Hardware den Garten zu bewässern."
        button={
          <Link href="https://digitale-dinge.de">
            <a>
              <Button xl>Jetzt loslegen</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
