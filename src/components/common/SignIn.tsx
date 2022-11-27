import { FC } from 'react';

type Props = {
  link?: string;
  isColorTheme?: boolean;
};

const SignIn: FC<Props> = ({ link, isColorTheme }) => (
  <div className={`sign-in-buttons-block ${isColorTheme ? 'color-theme' : ''}`}>
    <a href={link}>Sign In</a>
    <a href={link}>Sign Up</a>
  </div>
);

export default SignIn;
