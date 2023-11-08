export function getProductText(count) {
  if (count === 1) {
    return `${count} товар`;
  }
  if (count >= 2 && count <= 4) {
    return `${count} товара`;
  }
  return `${count} товаров`;
}

export function getSuppliersText(count) {
  if (count === 1) {
    return `${count} поставщик`;
  }
  if (count >= 2 && count <= 4) {
    return `${count} поставщика`;
  }
  return `${count} поставщиков`;
}

// Функция для преобразования Unix timestamp в строку формата "ДД Месяц"
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

// Форматируем цену из 10000 в 10 000, добавляем разделители разрядов
export function priceFormat(price) {
  return new Intl.NumberFormat('ru-RU').format(parseFloat(price));
}

// Форматирование телефона с 88008000000 в 8-800-800-00-00
export function formatPhoneNumber(phoneNumber) {
  // Удалить все символы, кроме цифр
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Разбить строку на части и объединить их с дефисами
  return cleanPhoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4-$5');
}

export function formatDateAsDDMMYY(originalDate) {
  const date = new Date(originalDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}

//
//
// export function getProductQuantity(productList) {
//   if (!productList.length) {
//     return 0;
//   }
//   return productList.reduce((total, currentProduct) => total + parseFloat(currentProduct.quantity), 0);
// }
//
// export function getProductTotalPrice(productList) {
//   if (!productList.length) {
//     return 0;
//   }
//   return productList.reduce((total, currentProduct) => {
//     const productPrice = parseFloat(currentProduct.price.replace(/\s/g, ''));
//     const productQuantity = parseFloat(currentProduct.quantity);
//     return total + productPrice * productQuantity;
//   }, 0);
// }
