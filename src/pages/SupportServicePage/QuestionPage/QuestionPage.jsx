import React from 'react';
import { Link } from 'react-router-dom';

import IconArrowCounter from '../../../components/UI/Icon/Icon_arrow-counter';
import { useCategoryExpansion } from '../../../shared/hooks/useCategoryExpansion';

import './QuestionPage.scss';

const QuestionPage = () => {
  const { expandedCategories, toggleCategoryExpansion } = useCategoryExpansion();

  const sections = [
    {
      title: 'Главное',
      questions: [
        {
          text: 'Как я могу зарегистрироваться на платформе в качестве продавца или покупателя?',
          link: '/register-seller',
        },
        {
          text: 'Как я могу найти подходящих партнеров для сотрудничества на платформе?',
          link: '/find-partners',
        },
        {
          text: 'Как обеспечивается безопасность сделок на платформе?',
          link: '/transaction-safety',
        },
        {
          text: 'Что делать, если у меня возникли проблемы с заказанными товарами или сотрудничеством с продавцом?',
          link: '/order-issues',
        },
      ],
    },

    {
      title: 'Оплата',
      questions: [
        {
          text: 'Какие есть способы оплаты?',
          link: '#',
        },
        {
          text: 'Ошибки про оплате',
          link: '#',
        },
        {
          text: 'Чеки и документы',
          link: '#',
        },
        {
          text: 'Как происходит оплата по безналичному расчету?',
          link: '#',
        },
        {
          text: 'Какие документы нужны для оплаты по безналичному расчету?',
          link: '#',
        },
      ],
    },

    {
      title: 'Доставка',
      questions: [
        {
          text: 'Какие есть способы и варианты доставки?',
          link: '#',
        },
        {
          text: 'Сколько стоит доставки?',
          link: '#',
        },
        {
          text: 'Что делать, если возникли проблемы с доставкой?',
          link: '#',
        },
        {
          text: 'Как быстро осуществляется доставка после заказа?',
          link: '#',
        },
        {
          text: 'Как изменить способ и адрес доставки?',
          link: '#',
        },
      ],
    },

    {
      title: 'Мой заказ',
      questions: [
        {
          text: 'Как посмотреть статус заказа',
          link: '/view-order-status',
        },
        {
          text: 'Как редактировать заказ',
          link: '/edit-order',
        },
        {
          text: 'Как отменить заказ',
          link: '/cancel-order',
        },
        {
          text: 'Как получить заказ',
          link: '/receive-order',
        },
        {
          text: 'Не получается сделать заказ',
          link: '/order-issues',
        },

        {
          text: 'Как оформить заказ?',
          link: '#',
        },
        {
          text: 'Где посмотреть историю заказов?',
          link: '#',
        },
      ],
    },

    {
      title: 'Возвраты и отмены',
      questions: [
        {
          text: 'Как вернуть товар',
          link: '#',
        },
        {
          text: 'Условие и сроки возврата',
          link: '#',
        },
        {
          text: 'Почему мой заказ отменили',
          link: '#',
        },
        {
          text: 'Когда вернуться деньги за отмену или возврат?',
          link: '#',
        },
      ],
    },

    {
      title: 'О сервисе',
      questions: [
        {
          text: 'Как работает сервис?',
          link: '#',
        },
        {
          text: 'Поставщикам',
          link: '#',
        },
        {
          text: 'Покупателям',
          link: '#',
        },
      ],
    },

    {
      title: 'Акции и бонусы',
      questions: [
        {
          text: 'Акции и спецпредложения',
          link: '#',
        },
        {
          text: 'Бонусы и промкоды',
          link: '#',
        },
        {
          text: 'Программа лояльности',
          link: '#',
        },
      ],
    },
  ];

  return (
    <section className="question-page">
      <h2 className="question-page__title">Частые вопросы</h2>
      <div className="question-page__container">
        {sections.map((section, index) => (
          <ul className="question-page__lists" key={index}>
            <h3 className="question-page__paragraph">{section.title}</h3>
            {section.questions.map((question, i) => (
              <li
                className={`question-page__list ${
                  !expandedCategories[index] && i >= 4 ? 'hidden' : ''
                }`}
                key={i}
              >
                <Link className="question-page__link" to={question.link}>
                  {question.text}
                </Link>
              </li>
            ))}
            {section.questions.length > 4 && (
              <button
                type="button"
                className="question-page__button-more"
                onClick={() => toggleCategoryExpansion(index)}
              >
                {expandedCategories[index] ? 'Скрыть' : 'Еще'}{' '}
                {expandedCategories[index] ? (
                  <IconArrowCounter className="question-page__icon" />
                ) : (
                  <IconArrowCounter />
                )}
              </button>
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default QuestionPage;
