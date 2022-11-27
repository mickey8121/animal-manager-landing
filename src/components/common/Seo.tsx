import Helmet from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

import imageUrlFor from 'helpers/imageUrlFor';
import buildImageObj from 'helpers/buildImageObj';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
  }
`;

type Props = {
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
  title: string;
  image?: any;
};

function SEO({ description, lang, meta = [], keywords, title, image }: Props): any {
  const { site } = useStaticQuery(detailsQuery) || {};

  const metaDescription = description || site.description || '';
  const siteTitle = site.title || '';
  const siteAuthor = site.author?.name || '';
  const metaImage = image?.asset ? imageUrlFor(buildImageObj(image)).width(1200).url() : '';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title === siteTitle ? '%s' : `%s | ${siteTitle}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteAuthor,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [],
        )
        .concat(meta)}
    />
  );
}

export default SEO;
