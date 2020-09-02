import { useState } from 'react';

const getTopping = toppings => toppings.map(item =>({ // преобразуем в массив объектов
    name: item,
    checked: false  // выбран ли топпинг
}));
//получим: [{name:'Coca-cola',checked: false}, {name:'fanta',...]

export function useToppings(openItem) {
    const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : []; //если топпингов у товара нет
    const [toppings, setToppings] = useState(readyTopping);

    const checkToppings = index => {  // при клике на один из допов меняем значение. Получаем по index эл-т по которому кликнули
        setToppings(toppings.map((item,i) =>{
            const newItem = {...item}
            if (i === index) {
                newItem.checked = !newItem.checked
            }
            return newItem;
        }));
    }

    return {toppings, checkToppings};
}