import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="okaKI ist kostenlos und open-source."
      subtitle="Starte noch heute!"
      button={
        <Link href="https://digitale-dinge.de">
          <a>
            <Button>Start</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
