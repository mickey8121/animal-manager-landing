import { FC, Fragment } from 'react';

interface Props {
  className?: string;
}

const Section: FC<Props> = ({ children, className = '' }) => (
  <div className={`content ${className}`.trim()}>
    <Fragment>{children}</Fragment>
  </div>
);

export default Section;
