import { FC } from 'react';

import { Link } from 'gatsby';

const links = [
  { link: '/terms', description: 'Terms of Service' },
  { link: '/security', description: 'Security Policy' },
  { link: '/privacy', description: 'Privacy Policy' },
];

const Footer: FC = () => (
  <footer>
    {links.map(({ link, description }) => (
      <Link to={link} key={link}>
        {description}
      </Link>
    ))}
  </footer>
);

export default Footer;
