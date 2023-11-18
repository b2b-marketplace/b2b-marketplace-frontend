import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppListHeader.scss';

/**
 * Компонент для отображения заголовка списка.
 *
 * @param {Array} fieldset - Массив элементов заголовка списка. Каждый элемент может быть строкой или объектом с полями: name (текст), class (дополнительный класс), style (стили).
 * @returns {JSX.Element}
 * @constructor
 * @example
 * // Пример использования:
 * const headerList = [
 *   'Название',
 *     {
 *     name: 'Стоимость',
 *     options: {
 *       onClick: () => {},
 *       class: 'order-product-item__quantity',
 *       style: {},
 *     },
 *   },
 *   'Цена',
 * ];
 * <AppListHeader fieldset={headerList} />
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const AppListHeader = React.memo(({ fieldset }) => {
  return (
    <div className="app-list-header">
      {fieldset.map((item, index) => {
        if (typeof item === 'object') {
          return (
            <span
              key={index}
              onClick={item.options?.onClick}
              className={clsx('list-header__label', item.options?.class)}
              style={item.options?.style}
            >
              {item.name}
            </span>
          );
        }
        return (
          <span key={index} className="list-header__label">
            {item}
          </span>
        );
      })}
    </div>
  );
});

AppListHeader.propTypes = {
  fieldset: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string, // Если элемент - строка
      PropTypes.shape({
        name: PropTypes.string.isRequired, // Если элемент - объект
        class: PropTypes.string,
        style: PropTypes.object,
      }),
    ])
  ).isRequired,
};

export { AppListHeader };
