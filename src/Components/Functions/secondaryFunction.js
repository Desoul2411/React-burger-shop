export const totalPriceItems = order => order.price * order.count;

export const formatCurrency  = priceToconvert => priceToconvert.toLocaleString('ru-Ru',
{style: 'currency', currency: 'RUB'});