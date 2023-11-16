/**
 * Склонение слов в зависимости от количества
 *
 * @param {number} number - Число, для которого нужно определить склонение
 * @param {string} one - Форма для единственного числа (например, "поставщик")
 * @param {string} two - Форма для чисел 2, 3, 4 (например, "поставщика")
 * @param {string} few - Форма для чисел 5 и более (например, "поставщиков")
 * @returns {string} - Возвращает строку с правильным склонением в зависимости от числа
 */
export function getNoun(number, one, two, few) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return few;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return few;
}

/**
 * Функция для преобразования Unix timestamp в строку формата "ДД Месяц"
 *
 * @param unixTimestamp
 * @returns {string}
 */
export function formatDateUnixTimestamp(unixTimestamp) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const date = new Date(unixTimestamp * 1000); // Преобразуем в миллисекунды
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month}`;
}

/**
 * Функция подсчитывает количество товара и общую цену
 *
 * @param productList
 * @returns {{totalQuantity: number, totalPrice: number}|*}
 */
export function getCalculateProductInfo(productList) {
  if (!productList.length) {
    return { totalQuantity: 0, totalPrice: 0 };
  }

  return productList.reduce(
    (result, currentProduct) => {
      const productPrice = parseFloat(currentProduct.price.replace(/\s/g, ''));
      const productQuantity = parseFloat(currentProduct.quantity);
      result.totalQuantity += productQuantity;
      result.totalPrice += productPrice * productQuantity;
      result.totalPrice += Math.round(result.totalPrice);
      return result;
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
}

/**
 * Форматируем цену из 10000 в 10 000, добавляем разделители разрядов
 *
 * @param price - цена
 * @returns {string}
 */
export function priceFormat(price) {
  return new Intl.NumberFormat('ru-RU').format(parseFloat(price));
}

/**
 * Форматирование телефона с 88008000000 в 8-800-800-00-00
 *
 * @param phoneNumber
 * @returns {*}
 */
export function formatPhoneNumber(phoneNumber) {
  // Удалить все символы, кроме цифр
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Разбить строку на части и объединить их с дефисами
  return cleanPhoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');
}

/**
 * Форматирование даты
 *
 * @param originalDate
 * @returns {string}
 */
export function formatDateAsDDMMYY(originalDate) {
  const date = new Date(originalDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

/**
 * Статус заказанного товара
 *
 * @param status
 * @returns {*|string}
 */
export function getStatusName(status) {
  const statusMap = {
    Created: 'Создан',
    Updated: 'Обновлен',
    Paid: 'Оплачен',
    Transit: 'В пути',
    Received: 'Получен',
    Canceled: 'Отменен',
    Returned: 'Возврат',
  };

  // Проверяем, есть ли статус в объекте statusMap
  if (status in statusMap) {
    return statusMap[status];
  } else {
    return 'Неизвестный статус';
  }
}
