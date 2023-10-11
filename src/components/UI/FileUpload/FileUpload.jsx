import React, { useState } from 'react';
import './FileUpload.scss';
import IconPlus from '../Icon/Icon_plus';

const FileUpload = ({ label, text, type }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Функция для обработки выбора файлов
  const handleFileSelect = (event) => {
    const selectedFilesw = event.target.files;

    const selectedFiles = [].slice.call(selectedFilesw, 0, 4);

    setSelectedImages(selectedFiles);
  };

  // Создаем массив из 4 пустых ячеек
  const emptyCells = Array.from({ length: 4 - selectedImages.length }).map(() => (
    <div key={Math.random()} className="file-upload__img file-upload__img--empty"></div>
  ));

  return (
    <div className="file-upload">
      <label className="file-upload__label">
        {label}
        <span className="file-upload__text">{text}</span>
      </label>
      <div className="file-upload__container">
        <input
          type="file"
          id="file-upload-input"
          accept="image/jpeg, image/png"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
        <label htmlFor="file-upload-input" className="file-upload__button">
          <IconPlus />
        </label>
        <div className="file-upload__container-img">
          {type === 'image' ? (
            <>
              {Array.from(selectedImages).map((file, index) => {
                return (
                  <img
                    key={`image-${index}`}
                    src={URL.createObjectURL(file)}
                    className="file-upload__img"
                  />
                );
              })}
              {selectedImages.length !== 4 && emptyCells}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
