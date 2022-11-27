import { FC } from 'react';

import Section from 'components/common/Section';
import LinkButton from 'components/common/LinkButton';

import app from 'helpers/app';

const tariffs = [
  {
    highlighted: false,
    title: 'Alpaca Owner',
    plan: 'Free for everyone',
    description: 'For every alpaca owner looking to improve the health of their herd.',
    buttonText: 'Get Started',
    details: [
      { desc: 'Unlimited alpaca records' },
      { desc: 'Free mobile applications' },
      { desc: 'Upload images' },
      { desc: 'Unlimited herds and groups' },
      { desc: 'Share records with other users' },
      { desc: 'Medication with reminders' },
      { desc: 'Shearing and fleece records' },
      { desc: 'Search alpaca for sale globally' },
      { desc: 'Full alpaca registry profile' },
    ],
  },

  {
    highlighted: true,
    title: 'Alpaca Breeder',
    plan: '$5/month',
    description: 'For the serious alpaca breeder looking for extra features.',
    buttonText: 'Get Started',
    details: [
      { desc: 'Everything in Alpaca Owner', marker: 'arrow' },
      { desc: 'List alpaca for sale' },
      { desc: 'Marketing tools for alpaca sellers' },
      { desc: 'Global progeny search' },
      { desc: 'No minimum term contract' },
      { desc: 'Bulk changes for larger herds' },
      { desc: 'Analytics and reports' },
      { desc: 'Transfer of ownership' },
    ],
  },

  {
    highlighted: false,
    title: 'Alpaca Associations',
    plan: 'Per member subscription',
    description: 'For new and existing associations looking to offer member benefits.',
    buttonText: 'Find out more',
    details: [
      { desc: 'Everything in Alpaca Breeder', marker: 'arrow' },
      { desc: 'Show management' },
      { desc: 'Membership management' },
      { desc: 'Payment processing' },
      { desc: 'Marketing tools' },
      { desc: 'Membership directory' },
      { desc: 'Self-service administration' },
      { desc: 'Registered transfer of ownership' },
      { desc: 'Registration of new alpaca' },
    ],
  },

  {
    highlighted: false,
    title: 'Developer',
    plan: 'Let’s have a chat',
    description: 'Extend your own product or build new features for existing users.',
    buttonText: 'Find out more',
    details: [
      { desc: 'Everything in Alpaca Associations', marker: 'arrow' },
      { desc: 'Extend existing applications' },
      { desc: 'Integrate with farm equipment' },
      { desc: 'Perform offline analytics' },
      { desc: 'Add new features and tools' },
      { desc: 'Market to other users online' },
      { desc: 'Developer support options' },
    ],
  },
];

const Pricing: FC = () => (
  <Section className='manager-pricing'>
    <h2 className='title'>Pricing</h2>

    <div className='pricing-cards'>
      {tariffs.map(({ highlighted, title, plan, description, buttonText, details }) => (
        <div key={title} className='pricing-block'>
          <div className={`pricing-card ${highlighted ? 'active' : ''}`}>
            <span className='tariff-plan'>{plan}</span>
            <h3 className='card-title'>{title}</h3>
            <p className='card-description'>{description}</p>
            <LinkButton href={app.managerLink} small active={highlighted}>
              {buttonText}
            </LinkButton>
          </div>
          <div className='pricing-card-details'>
            {details.map(item => (
              <ul key={item.desc}>
                <li className={item.marker === 'arrow' ? 'inherited-abilities' : undefined}>
                  <span>{item.desc}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Pricing;
