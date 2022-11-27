import { FC, useMemo } from 'react';
import { Link } from 'gatsby';

import capitalize from 'lodash/capitalize';

import SignIn from 'components/common/SignIn';

import app from 'helpers/app';

const Header: FC<{ isColorTheme?: boolean }> = ({ isColorTheme }) => {
  const capitalizedAppName = useMemo(() => capitalize(app.appName), []);

  return (
    <div className='header'>
      <p className='trade-registry'>
        <Link to='/'>{`${capitalizedAppName} Manager and Registry®`}</Link>
      </p>
      <SignIn link={app.managerLink} isColorTheme={isColorTheme} />
    </div>
  );
};

export default Header;
