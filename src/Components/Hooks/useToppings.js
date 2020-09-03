import { useState } from 'react';

const getTopping = toppings => toppings.map(item =>({ // преобразуем в массив объектов
    name: item,
    checked: false  // выбран ли топпинг
}));
//получим: [{name:'Coca-cola',checked: false}, {name:'fanta',...]

export function useToppings(openItem) {
    const readyTopping = openItem.topping ? openItem.topping : openItem.toppings ? // - openItem.topping - массив с объектами, который создаём при первом вызове useTopping. Если он уже был создан, то его и вернём уже со значениями true или false (openItem.topping ? openItem.topping), а если ещё не был создан, то будем сохдавать его с нуля.
    getTopping(openItem.toppings) : []; //если топпингов у товара нет
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