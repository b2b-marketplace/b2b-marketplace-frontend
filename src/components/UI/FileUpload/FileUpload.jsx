import React from 'react';
import './FileUpload.scss';
import IconPlus from '../../UI/Icon/Icon_plus';

const FileUpload = ({ label, text, comet }) => {
  return (
    <div className="file-upload">
      <label className="file-upload__label">{label}</label>
      <div className="file-upload__container">
        <button className="file-upload__button">
          <IconPlus />
        </button>
        <div className="file-upload__container-text">
          <p className="file-upload__text">{text}</p>
          <p className="file-upload__text2">{comet}</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
