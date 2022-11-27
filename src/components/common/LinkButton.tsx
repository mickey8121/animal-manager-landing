import { FC } from 'react';

interface Props {
  href?: string;
  small?: boolean;
  active?: boolean;
  className?: string;
}

const LinkButton: FC<Props> = ({ href, children, small, active, className }) => (
  <a
    className={className || `get-started-btn${small ? ' small' : ''} ${active ? 'active' : ''}`}
    href={href}
    role='button'
  >
    {children}
  </a>
);

export default LinkButton;
