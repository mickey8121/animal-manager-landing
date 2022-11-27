import { FC } from 'react';

import RightArrowIcon from 'images/icons/arrow-right-icon.svg';

const ShowMore: FC = () => (
  <button type='button' className='btn btn-show-more' onClick={() => 'show more!'}>
    Show more
    <RightArrowIcon />
  </button>
);

export default ShowMore;
