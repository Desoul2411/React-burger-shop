export const totalPriceItems = order => {
    const countTopping = order.topping && order.topping.filter(item => item.checked).length; // если есть топпинги, то находим длинну массива топпингов, которые checked
    const priceTopping = (order.price * 0.1) * countTopping;
    return (order.price + priceTopping) * order.count;
}

export const formatCurrency  = priceToconvert => priceToconvert.toLocaleString('ru-Ru',
{style: 'currency', currency: 'RUB'});

export const projection = (rules) => {
    const keys = Object.keys(rules);  // ддостаём ключи name,price,count,toppings,choices
    return obj => keys.reduce((newObj,key) => {//newObj - аккумулятор
        newObj[key] = rules[key].reduce((val,fn, i) => (i ? fn(val) : obj[fn]),null)  // на первой итерации - val - null,fn - toppings,  i - 0
        return newObj;
    },{})  
};

