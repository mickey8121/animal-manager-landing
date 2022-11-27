import { FC, useMemo } from 'react';

import capitalize from 'lodash/capitalize';

import AlpacaHealth from 'images/icons/abilities/alpaca-health.svg';
import AlpacaManage from 'images/icons/abilities/alpaca-manage.svg';
import AlpacaStep from 'images/icons/abilities/alpaca-stepbystep.svg';

import SheepHealth from 'images/icons/abilities/sheep-health.svg';
import SheepManage from 'images/icons/abilities/sheep-manage.svg';
import SheepStep from 'images/icons/abilities/sheep-stepbystep.svg';

import LlamaHealth from 'images/icons/abilities/llama-health.svg';
import LlamaManage from 'images/icons/abilities/llama-manage.svg';
import LlamaStep from 'images/icons/abilities/llama-stepbystep.svg';

import Section from 'components/common/Section';

import app from 'helpers/app';

const Abilities: FC = () => {
  const healthImage = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return <SheepHealth />;
      case 'llama':
        return <LlamaHealth />;
      default:
        return <AlpacaHealth />;
    }
  }, []);

  const manageImage = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return <SheepManage />;
      case 'llama':
        return <LlamaManage />;
      default:
        return <AlpacaManage />;
    }
  }, []);

  const stepByStep = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return <SheepStep />;
      case 'llama':
        return <LlamaStep />;
      default:
        return <AlpacaStep />;
    }
  }, []);

  const abilities = useMemo(
    () => [
      {
        type: 'manage',
        title: `Manage all your ${app.appName}s`,
        description: `The ${capitalize(
          app.appName,
        )} Manager that promotes health and\nwellbeing in your herd, saves you time and tracks\ninformation throughout their life.`,
        image: manageImage,
      },
      {
        type: 'health',
        title: 'Health monitoring',
        description: `Track and monitor the health of your ${capitalize(
          app.appName,
        )} and any\ninterventions for the most reliable holistic view of their life.`,
        image: healthImage,
      },
      {
        type: 'step',
        title: 'Step by step',
        description: `Ideal for first time ${capitalize(
          app.appName,
        )} owners, with step by step\nschedule and instructions to help maintain optimum\nhealth and happiness in your herd.`,
        image: stepByStep,
      },
    ],
    [healthImage, manageImage, stepByStep],
  );

  return (
    <Section className='manager-abilities'>
      <div className='abilities-items'>
        {abilities.map(({ title, description, image, type }) => (
          <div className={`ability-item ${type}`} key={title}>
            <div className='data'>
              <h2 className='title'>{title}</h2>
              <p className='description'>{description}</p>
            </div>
            <div className='image'>{image}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Abilities;
