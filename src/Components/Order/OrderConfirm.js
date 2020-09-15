import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle } from '../Order/Order';
import { Total }  from '../Order/Order';
import { TotalPrice }  from '../Order/Order';
import { ButtonCheckout } from '../ButtonCkeckout/ButtonCheckout';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {  // правила базы данных. Свойства ['name'] мы берём из объекта orders,  a name: - новые свойства формируемого объекта
    name: ['name'],
    price: ['price'],
    count:['count'],
    topping: ['topping',arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no topping'],
    choice: ['choice',item => item ? item: 'no choices'],
}

const sendOrder = (database, orders,authentication) => {
    //console.log('orders',orders)
    const newOrder = orders.map(projection(rulesData));
    //console.log('newOrder',newOrder)
    database.ref('orders').push().set({   // ref('orders') - ключ под которым будем хранить данные// .push - добавляет ключ (генерируется автоматом)
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
}



export const OrderConfirm = ({ 
    /* orders,setOrders,    // теперь передаём через Context
    authentication,
    setOpenOrderConfirm,
    database */
}) => {

    const {
        orders: { orders, setOrders },
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm },
        database,
    } = useContext(Context);

    const total = orders.reduce((result,order) => 
    result + totalPriceItems(order),0);

    const closeModal = e => {
        if(e.target.id === 'overlay-confirm-modal') {
            setOpenOrderConfirm(false)   
        }
    };
    
    return (
        <Overlay id="overlay-confirm-modal" onClick={closeModal}> 
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout
                    onClick={()=> {
                        sendOrder(database, orders,authentication);
                        setOrders([]); //Очищаем заказы передав пустой массив
                        setOpenOrderConfirm(false); // Чтобы закрыть это окно
                    }}
                >
                    Подтвердить
                </ButtonCheckout>
                
            </Modal>
        </Overlay>
    )
}