import { FC, useMemo } from 'react';

import capitalize from 'lodash/capitalize';

import LinkButton from 'components/common/LinkButton';
import FeaturesSlider from 'components/common/slider/FeaturesSlider';

import Alpaca from 'images/icons/sliderIcons/alpaca-icon.svg';
import AlpacaMed from 'images/icons/sliderIcons/alpaca-med-slider.svg';
import AlpacaTree from 'images/icons/sliderIcons/alpaca-tree-icon.svg';

import Llama from 'images/icons/sliderIcons/llama-icon.svg';
import LlamaMed from 'images/icons/sliderIcons/llama-med-slider.svg';
import LlamaTree from 'images/icons/sliderIcons/llama-tree-icon.svg';

import Sheep from 'images/icons/sliderIcons/sheep-icon.svg';
import SheepMed from 'images/icons/sliderIcons/sheep-med-slider.svg';
import SheepTree from 'images/icons/sliderIcons/sheep-tree-icon.svg';

import app from 'helpers/app';

const Welcome: FC = () => {
  const capitalizedAppName = useMemo(() => capitalize(app.appName), []);

  const animalIcon = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return (
          <div className='icon'>
            <Sheep />
          </div>
        );
      case 'llama':
        return (
          <div className='icon'>
            <Llama />
          </div>
        );
      default:
        return (
          <div className='icon'>
            <Alpaca />
          </div>
        );
    }
  }, []);

  const animalMed = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return (
          <div className='icon'>
            <SheepMed />
          </div>
        );
      case 'llama':
        return (
          <div className='icon'>
            <LlamaMed />
          </div>
        );
      default:
        return (
          <div className='icon'>
            <AlpacaMed />
          </div>
        );
    }
  }, []);

  const animalTree = useMemo(() => {
    switch (app.appName) {
      case 'sheep':
        return (
          <div className='icon'>
            <SheepTree />
          </div>
        );
      case 'llama':
        return (
          <div className='icon'>
            <LlamaTree />
          </div>
        );
      default:
        return (
          <div className='icon'>
            <AlpacaTree />
          </div>
        );
    }
  }, []);

  const items = [
    { icon: animalIcon, description: 'Participate in animal shows', badge: 'soon' },
    { icon: animalMed, description: 'Never forget to inject the medicine', badge: 'new' },
    { icon: animalTree, description: 'View animal family tree', badge: 'soon' },
  ];

  return (
    <div className='welcome'>
      <div className='left-side-section'>
        <div className='left-side-content'>
          <div className='main-content'>
            <h2 className='headline-title'>{` A Healthy ${capitalizedAppName} is a Happy ${capitalizedAppName}`}</h2>
            <p className='description'>
              {`Looking after the health and well-being of your\n${capitalizedAppName} will be easy and rewarding.`}
            </p>
            <LinkButton href={app.managerLink}>Get Started</LinkButton>
          </div>
        </div>
      </div>
      <div className='right-side-section'>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          muted
          autoPlay
          loop
          playsInline
          style={{ width: '100%' }}
          poster={`images/welcome-${app.appName}.png`}
        >
          <source src={`video/welcome-${app.appName}.mp4`} type='video/mp4' />
        </video>
      </div>
      <div className='container-for-slider'>
        <FeaturesSlider slides={items} />
      </div>
    </div>
  );
};

export default Welcome;
