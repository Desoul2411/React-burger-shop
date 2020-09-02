export const totalPriceItems = order => {
    const countTopping = order.topping && order.topping.filter(item => item.checked).length; // если есть топпинги, то находим длинну массива топпингов, которые checked
    const priceTopping = (order.price * 0.1) * countTopping;
    return (order.price + priceTopping) * order.count;
}

export const formatCurrency  = priceToconvert => priceToconvert.toLocaleString('ru-Ru',
{style: 'currency', currency: 'RUB'});