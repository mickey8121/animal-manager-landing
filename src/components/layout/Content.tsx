import { FC, Fragment, useMemo } from 'react';

import capitalize from 'lodash/capitalize';

import Welcome from 'components/blocks/Welcome';
import Abilities from 'components/blocks/Abilities';
import Blog from 'components/blocks/blog/Blog';
import CallToAction from 'components/blocks/CallToAction';
import Pricing from 'components/blocks/Pricing';
import AlpacaSell from 'components/blocks/AlpacaSell';
import Accessibility from 'components/blocks/Accessibility';

import mapEdgesToNodes from 'helpers/mapEdgesToNodes';
import filterOutDocsWithoutSlugs from 'helpers/filterOutDocsWithoutSlugs';
import filterOutDocsPublishedInTheFuture from 'helpers/filterOutDocsPublishedInTheFuture';
import SEO from 'components/common/Seo';

import app from 'helpers/app';

const Content: FC<{ posts: any }> = ({ posts }) => {
  const postNodes = useMemo(() => {
    if (posts)
      return mapEdgesToNodes(posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture);

    return [];
  }, [posts]);

  return (
    <Fragment>
      <SEO title={`${capitalize(app.appName)} Manager`} />
      <Welcome />
      <Abilities />
      {app.appName === 'alpaca' && <AlpacaSell />}
      <Accessibility />
      {app.appName === 'alpaca' && (
        <Fragment>
          <div className='background--grey'>
            {/* <Blog /> */}
            {postNodes && <Blog articles={postNodes} link='/blog' />}
          </div>
          <Pricing />
        </Fragment>
      )}
      <CallToAction />
    </Fragment>
  );
};

export default Content;
