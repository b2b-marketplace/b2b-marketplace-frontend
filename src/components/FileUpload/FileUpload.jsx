import React from 'react';
import './FileUpload.scss';

const FileUpload = ({label, text, comet }) => {
  return (
    <div className="file-upload">
      <label className="file-upload__label">{label}</label>
      <div className="file-upload__container">
        <input className="file-upload__input" />
        <p className="file-upload__text">
          {text}
        </p>
        <p className="file-upload__text2">{comet}</p>
      </div>
    </div>
  );
};

export default FileUpload;