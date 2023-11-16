import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AppListHeader.scss';

/**
 * Компонент для отображения заголовка списка.
 *
 * @param {Array} list - Массив элементов заголовка списка. Каждый элемент может быть строкой или объектом с полями: name (текст), class (дополнительный класс), style (стили).
 * @returns {JSX.Element}
 * @constructor
 * @example
 * // Пример использования:
 * const headerList = [
 *   'Название',
 *   { name: 'Количество', class: 'quantity', style: { color: 'red' } },
 *   'Цена',
 * ];
 * <AppListHeader list={headerList} />
 *
 * @author Дмитрий Типсин | https://t.me/Chia_Rio_Ru
 */
const AppListHeader = ({ list }) => {
  return (
    <div className="app-list-header">
      {list.map((item, index) => {
        if (typeof item === 'object') {
          return (
            <span key={index} className={clsx('list-header__label', item.class)} style={item.style}>
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
};

AppListHeader.propTypes = {
  list: PropTypes.arrayOf(
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
