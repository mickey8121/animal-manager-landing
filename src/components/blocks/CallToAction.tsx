import { FC } from 'react';

import capitalize from 'lodash/capitalize';

import LinkButton from 'components/common/LinkButton';
import Section from 'components/common/Section';

import app from 'helpers/app';

const CallToAction: FC = () => (
  <Section className='call-to-action'>
    <h2 className='title'>{`${capitalize(app.appName)} Manager and Registry`}</h2>
    <p className='description'>
      {`Looking after the health and wellbeing of your\n${app.appName} will be easy and rewarding.`}
    </p>
    <LinkButton href={app.managerLink}>Get Started</LinkButton>
  </Section>
);

export default CallToAction;
