import { FC } from 'react';
import { Link } from 'gatsby';

import { format } from 'date-fns';

import Section from 'components/common/Section';
import LinkButton from 'components/common/LinkButton';
import RightArrowIcon from 'images/icons/arrow-right-icon.svg';
import PortableText from 'components/common/PortableText';

import getBlogUrl from 'helpers/getBlogUrl';
import buildImageObj from 'helpers/buildImageObj';
import imageUrlFor from 'helpers/imageUrlFor';

const BlogBlock: FC<{ articles: any; link?: any }> = ({ articles, link }) => (
  <Section className='blog'>
    <h2 className='title'>Blog</h2>
    <div className='blog-cards'>
      {articles.map(({ title, publishedAt, id, _rawExcerpt, mainImage, slug }: any) => (
        <Link className='blog-post-preview' key={id} to={getBlogUrl(publishedAt, slug.current)}>
          <div className='blog-card'>
            {mainImage?.asset && (
              <div className='card-image'>
                <img
                  src={imageUrlFor(buildImageObj(mainImage))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .auto('format')
                    .url()}
                  alt={mainImage.alt}
                />
              </div>
            )}
            <div className='card-body'>
              <h3 className='card-title'>{title}</h3>
              {_rawExcerpt && (
                <div className='card-description'>
                  <PortableText blocks={_rawExcerpt} />
                </div>
              )}
              <span className='blog-date'>{format(publishedAt, 'MMMM Do, YYYY')}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    {link && (
      <div className='show-more'>
        <LinkButton href={link} className='btn btn-show-more'>
          Show more
          <RightArrowIcon />
        </LinkButton>
      </div>
    )}
  </Section>
);

export default BlogBlock;
