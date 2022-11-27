import { FC } from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const Layout: FC<{ isColorTheme?: boolean }> = ({ isColorTheme, children }) => (
  <div className='layout'>
    <title>Home Page</title>
    <Header isColorTheme={isColorTheme} />
    {children}
    <Footer />
  </div>
);

export default Layout;
