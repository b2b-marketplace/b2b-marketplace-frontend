import React from 'react';

import IconCommentLike from '../UI/Icon/Icon_comment-like';
import IconCommentDislike from '../UI/Icon/Icon_comment-dislike';

import './CommentRating.scss';

/**
 * Блок для отображения количества лайков/дизлайков под отзывом о товаре
 * @param {likes: number} число лайков
 * @param {dislikes: number} число дизлайков
 * @returns {JSX.Element}
 */

const CommentRating = ({ likes, dislikes }) => {
  return (
    <div className="comment-rating">
      <div className="comment-rating__item">
        <button className="comment-rating__btn">
          <IconCommentLike />
        </button>
        <p className="comment-rating__item-count">{likes}</p>
      </div>
      <div className="comment-rating__item">
        <button className="comment-rating__btn">
          <IconCommentDislike />
        </button>
        <p className="comment-rating__item-count">{dislikes}</p>
      </div>
    </div>
  );
};

export default CommentRating;
