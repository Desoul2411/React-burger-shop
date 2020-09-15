import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../ButtonCkeckout/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';


const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left:0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 380px;
`;

export const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.ul`
    flex-grow:1;
`;

const OrderList = styled.ul`

`;

export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span: first-child {
        flex-grow:1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;


export const Order = (/* {orders, setOrders, setOpenItem, authentication, logIn, setOpenOrderConfirm } */) => {  // теперь получаем св-ва через Context

    const {
        auth: {authentication, logIn},
        orders: {orders, setOrders },
        orderConfirm: {setOpenOrderConfirm},
    } = useContext(Context);
    
    //console.log(database)
    const deleteItem = index => { 
        const newOrders = orders.filter((item, i) => 
            index !== i
        );
         setOrders(newOrders)
    };

    const total = orders.reduce((result,order) => 
    result + totalPriceItems(order),0);

    const totalCounter = orders.reduce((result,order) => 
    result + order.count,0);
    
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle> 
            <OrderContent>
                {orders.length ? <OrderList>
                    {orders.map((order,index) => <OrderListItem 
                        key={index} 
                        order={order} 
                        deleteItem={deleteItem}
                        index={index}
                    />)}
                </OrderList> : 
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            {orders.length ?
                <>
                <Total>
                    <span>Итого</span>
                    <span>{totalCounter}</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    if(authentication) {
                        setOpenOrderConfirm(true); // передаём true для открытия модального окна
                    } else {
                        logIn()
                    }
                }

                /*  authentication ? orders.map(order => console.log(order)) : logIn  */
                }>
                    Оформить
                </ButtonCheckout>
                </> :
                null
            } 
        </OrderStyled>
    )
}