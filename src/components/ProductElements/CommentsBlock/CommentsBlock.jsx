import ProductRating from '../ProductRating/ProductRating';

import './CommentsBlock.scss';

function CommentsBlock({ author, text, rating }) {
  return (
    <div className="comment">
      <h3 className="comment__author">
        {author}
        <ProductRating rating={rating} />
      </h3>
      <p className="comment__text">{text}</p>
    </div>
  );
}

export default CommentsBlock;
