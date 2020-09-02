import React from 'react';
import styled from 'styled-components';
import  trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { useToppings } from '../Hooks/useToppings';


const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
`;

const ItemName = styled.span`
    flex-grow: 1;
    
`;

const ItemPrice = styled.span`
    margn-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
    margin-left: 15px;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    width: 100%;
`;

export const OrderListItem = ({ order }) =>  {

    const topping = order.topping.filter(item => item.checked) // отфильтровали по checked
    .map(item => item.name) // оставили только имя
    .join(', ');   // преобразовали в строки

    return(
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count} </span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}
            </ItemPrice>
            <TrashButton/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
}