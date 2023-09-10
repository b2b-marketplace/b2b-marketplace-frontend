import React from 'react';
import './FileUpload.scss';
import IconPlus from '../../UI/Icon/Icon_plus';

const FileUpload = ({ label, text, comet }) => {
  return (
    <div className="file-upload">
      <label className="file-upload__label">
        {label}
        <span className="file-upload__text">{text}</span>
      </label>
      <div className="file-upload__container">
        <button className="file-upload__button">
          <IconPlus />
        </button>
        <div className="file-upload__container-img">
          <div className="file-upload__img"></div>
          <div className="file-upload__img"></div>
          <div className="file-upload__img"></div>
          <div className="file-upload__img"></div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
