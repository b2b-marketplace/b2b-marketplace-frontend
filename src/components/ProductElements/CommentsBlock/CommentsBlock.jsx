import ProductRatingStars from '../ProductRatingStars/ProductRatingStars';
import CommentRating from '../../CommentRating/CommentRating';

import userLogo from './../../../images/defaultUserLogo.png';

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
          <img src={userLogo} alt="аватар пользователя" className="comment__user-avatar" />
          <p className="comment__user-name">{comment.author}</p>
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

      {comment.images.length > 0 && (
        <div className="comment__photos">
          {comment.images.map((image) => (
            <img className="comment__photos-item" src={image} alt="фото товара от пользователя" />
          ))}
        </div>
      )}

      <CommentRating likes={comment.likeCount} dislikes={comment.dislikeCount} />
    </div>
  );
}
// TODO заменить на компонент с подборкой фото

export default CommentsBlock;
