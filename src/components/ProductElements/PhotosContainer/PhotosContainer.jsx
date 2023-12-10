import React from 'react';

import './PhotosContainer.scss';

/**
 * @description Блок для отображения наличия фотографий, при числе фото > 5 отображается только 5 фото и их общее количество
 * @param {photos: array}
 * @returns {JSX.Element}
 */

const PhotosContainer = ({ photos }) => {
  return (
    <div className="photos">
      {photos.length > 5 ? (
        <>
          {photos.slice(0, 4).map((item, idx) => (
            <Photo key={idx} photo={item} />
          ))}
          <div className="photos-all-info">
            <Photo photo={photos[4]} isInfo={true} />
            <p className="photos-count">{`+ ${photos.length - 5}`}</p>
          </div>
        </>
      ) : (
        photos.map((item, idx) => <Photo key={idx} photo={item} />)
      )}
    </div>
  );
};

function Photo({ photo, isInfo = false }) {
  return (
    <img
      className={`photos-item ${isInfo && 'photos-item-info'}}`}
      src={photo}
      alt="фото товара от пользователя"
    />
  );
}

export default PhotosContainer;
