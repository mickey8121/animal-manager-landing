import { FC } from 'react';

import Section from 'components/common/Section';

import FirstCard from 'images/icons/alpaca/first-card.svg';
import SecondCard from 'images/icons/alpaca/second-card.svg';
import ThirdCard from 'images/icons/alpaca/third-card.svg';
import FourthCard from 'images/icons/alpaca/fourth-card.svg';

// TODO: Refactor this component for network API usage! Animal on sale will come from API!

// const alpacasForSale = [
//   {
//     name: 'Felix',
//     type: 'Huacaya',
//     country: 'New Zealand',
//     photo: 'felix',
//   },
//   {
//     name: 'Natalya',
//     type: 'Huacaya',
//     country: 'New Zealand',
//     photo: 'natalya',
//   },
//   {
//     name: 'Moneypenny',
//     type: 'Huacaya',
//     country: 'New Zealand',
//     photo: 'moneypenny',
//   },
//   {
//     name: 'Zoe',
//     type: 'Huacaya',
//     country: 'New Zealand',
//     photo: 'zoe',
//   },
// ];

const AlpacaSell: FC = () => (
  <Section className='manager-alpaca-sell'>
    <div className='data'>
      <h2 className='title'>Sell and buy alpacas</h2>
      <p className='description'>
        {'Add your alpacas for sale. Browse our\ncatalog to find a new alpaca for your heard.'}
      </p>
    </div>

    <div className='animal-cards'>
      <div className='left-side'>
        <div className='animal first-card'>
          <FirstCard />
        </div>
        <div className='animal second-card'>
          <SecondCard />
        </div>
        <div className='animal first-card'>
          <FirstCard />
        </div>
        <div className='animal second-card'>
          <SecondCard />
        </div>
      </div>

      <div className='right-side'>
        <div className='animal third-card'>
          <ThirdCard />
        </div>
        <div className='animal fourth-card'>
          <FourthCard />
        </div>
        <div className='animal third-card'>
          <ThirdCard />
        </div>
        <div className='animal fourth-card'>
          <FourthCard />
        </div>
      </div>
    </div>
  </Section>
);

export default AlpacaSell;
