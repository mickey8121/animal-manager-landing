import { FC, useMemo } from 'react';

import Section from 'components/common/Section';

import app from 'helpers/app';
import capitalize from 'lodash/capitalize';

const Accessibility: FC = () => {
  const capitalizedAppName = useMemo(() => capitalize(app.appName), []);

  return (
    <Section className='accessibility'>
      <div className='accessibility-section'>
        <div className='image-container tablet-image'>
          <img
            src={`images/accessibility-tablet-${app.appName}.png`}
            alt={`${capitalizedAppName}manager-tablet`}
          />
        </div>
        <div className='data text--overlap'>
          <h2 className='title'>{'Available anywhere.\nOn any device.'}</h2>
          <p className='description first'>
            {
              'Access data when you need it,\non portable devices out in the paddock\nor online using an internet browser.'
            }
          </p>
          <p className='description second'>
            {
              'Nothing to install or manage. There has\nnever been an easier or better value\nsolution to alpaca management.'
            }
          </p>
        </div>
        <div className='image-container browser-image'>
          <img
            src={`images/accessibility-browser-${app.appName}.png`}
            alt={`${capitalizedAppName}manager-browser`}
          />
        </div>
        <div className='image-container mobile-image'>
          <img
            src={`images/accessibility-mobile-${app.appName}.png`}
            alt={`${capitalizedAppName}manager-mobile`}
          />
        </div>
      </div>
    </Section>
  );
};

export default Accessibility;
