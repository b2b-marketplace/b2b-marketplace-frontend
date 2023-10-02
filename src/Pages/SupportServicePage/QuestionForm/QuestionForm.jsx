import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuestionForm.scss';
import InputField from '../../../components/UI/InputField/InputField';
import DropDown from '../../../components/UI/DropDown/DropDown';
import IconFolderAdd from '../../../components/UI/Icon/Icon_folder-add';
import Checkbox from '../../../components/UI/Checkbox/Checkbox';
import { Button } from '../../../components/UI/Button/Button';

const QuestionForm = () => {
  const [activeLink, setActiveLink] = useState('ask');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
    file: null, // Сохраните загруженный файл, если это необходимо
    agreeTerms: false,
  });

  const handleAskClick = () => {
    setActiveLink('ask');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Логика проверки
    if (
      !formData.name ||
      !formData.email ||
      !formData.topic ||
      !formData.message ||
      !formData.agreeTerms
    ) {
      alert('Пожалуйста, заполните все необходимые поля и согласитесь с условиями.');
      return;
    }

    // Подготовьте данные для отправки на сервер
    // const dataToSend = {
    //   name: formData.name,
    //   email: formData.email,
    //   topic: formData.topic,
    //   message: formData.message,
    //   file: formData.file,
    // };
  };

  return (
    <section className="question-form">
      <h2 className="question-form__title">Служба поддержки</h2>
      <div className="question-form__links">
        <Link
          className={`question-form__link ${activeLink === 'ask' ? 'active-link' : ''}`}
          onClick={handleAskClick}
        >
          Задать вопрос
        </Link>

        <Link className="question-form__link">Мои сообщения</Link>
      </div>
      <form className="question-form__form" onSubmit={handleSubmit}>
        <InputField
          label="Ваше имя*"
          placeholder="ФИО"
          type="text"
          inputClassName="question-form__input"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Ваш e-mail*"
          placeholder="mail@mail.ru"
          type="email"
          inputClassName="question-form__input"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <DropDown
          label="Тема обращения*"
          placeholder="Выберите из списка"
          options={['Value 1', 'Value 2', 'Value 3', 'Value 4']}
          name="topic"
          value={formData.topic}
          onChange={handleInputChange}
          required
        />
        <label className="question-form__label-textarea">
          Сообщение*
          <textarea
            className="question-form__textarea"
            placeholder="Задайте вопрос"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>

        <label className="question-form__folder">
          <IconFolderAdd />
          Добавить файл
          <input
            type="file"
            accept="image/jpeg"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />
        </label>

        <div className="question-form__checkbox">
          <Checkbox
            name="agreeTerms"
            checked={formData.agreeTerms}
            handleChangeCheckbox={handleCheckboxChange}
            required
          />
          <p className="question-form__text">
            Соглашаюсь с<span className="question-form__text_blue">&nbsp;Условиями сервиса</span>
            &nbsp;и&nbsp;
            <span className="question-form__text_blue">Политикой конфиденциальности</span>
          </p>
        </div>
        <Button size="xl" primary dark type="submit">
          Отправить
        </Button>
      </form>
    </section>
  );
};

export default QuestionForm;
