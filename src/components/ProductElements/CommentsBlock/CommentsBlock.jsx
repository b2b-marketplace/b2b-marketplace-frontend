import CommentRating from '../../CommentRating/CommentRating';
import PhotosContainer from '../PhotosContainer/PhotosContainer';
import ProductRatingStars from '../ProductRatingStars/ProductRatingStars';

import './CommentsBlock.scss';

/**
 * Блок комментария о товаре от покупателя
 *
 * @param {{ comment: object; }}
 * @returns {JSX.Element}
 */

function CommentsBlock({ comment }) {
  return (
    <div className="comment">
      <div className="comment__top">
        <div className="comment__user">
          <img
            src={comment.author.avatar}
            alt="аватар пользователя"
            className="comment__user-avatar"
          />
          <p className="comment__user-name">{comment.author.name}</p>
        </div>
        <div className="comment__info">
          <p className="comment__info-date">{comment.date}</p>
          <ProductRatingStars rating={comment.rating} />
        </div>
      </div>

      <div className="comment__text">
        <div className="comment__text-item">
          <h3 className="comment__text-title">Достоинства</h3>
          <p className="comment__text-content">{comment.advantages}</p>
        </div>
        <div className="comment__text-item">
          <h3 className="comment__text-title">Недостатки</h3>
          <p className="comment__text-content">{comment.disadvantages}</p>
        </div>
        <div className="comment__text-item">
          <h3 className="comment__text-title">Комментарий</h3>
          <p className="comment__text-content">{comment.comment}</p>
        </div>
      </div>

      {comment.images.length > 0 && <PhotosContainer photos={comment.images} />}

      <CommentRating likes={comment.likes} dislikes={comment.dislikes} />
    </div>
  );
}

export default CommentsBlock;
