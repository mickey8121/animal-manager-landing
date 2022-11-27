import { format, distanceInWords, differenceInDays } from 'date-fns';

import PortableText from 'components/common/PortableText';

import buildImageObj from 'helpers/buildImageObj';
import imageUrlFor from 'helpers/imageUrlFor';

const BlogDescription = ({
  _rawBody,
  categories,
  title,
  mainImage,
  publishedAt,
  authors,
}: any): any => {
  return (
    <article className='blog-post-container'>
      <div className='blog-post-content'>
        <h3 className='title'>{title}</h3>
        <aside className='meta-content'>
          <div className='categories-authors-union'>
            {categories && (
              <div className='categories-list-container'>
                <div className='categories-list-title'>Categories: </div>
                <ul className='categories-list-items'>
                  {categories.map((category: any) => (
                    <li key={category._id} className='categories-list-item'>
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className='authors-list-container'>
              <div className='authors-list-title'>Authors: </div>
              <ul className='authors-list-items'>
                {authors?.map(({ author, _key }: any) => (
                  <li key={_key} className='authors-list-item'>
                    <div>{author?.name || <em>Missing name</em>}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {publishedAt && (
            <div className='blog-post-date'>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do, YYYY')}
            </div>
          )}
        </aside>
        <div className='main-content'>
          {mainImage?.asset && (
            <div className='main-image'>
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(900)
                  .height(Math.floor((9 / 18) * 900))
                  .fit('crop')
                  .auto('format')
                  .url()}
                alt={mainImage.alt}
              />
            </div>
          )}
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
      </div>
    </article>
  );
};

export default BlogDescription;
