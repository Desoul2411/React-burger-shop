import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../ButtonCkeckout/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';


const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0, 0, 0, .5);
    z-index:20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    width:100%;
    height:200px;
    background-image: url(${({img}) => img});   
    background-size:  cover;
    background-position:  center;
`;

const ProductName = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;

const ProductPrice = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 53px;
`;


const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 20px 53px 43px 37px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();  //{count,setCount,onChange}
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);   // так openItem cтанет null (!openItem) и окно закроется (return null)
        }
    }

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choices: choices.choise,
    };

    const addToOrder = () => {
        setOrders([...orders, order]); // добавляем (передаём в хук setOrders) все старые заказы (orders) и новый (order)
        setOpenItem(null); // если openItem будут пуст - не отобпажать модальное окно - условие { openItem.openItem &&  <ModalItem {...openItem} {...orders}/> }
    }


   /*  if(!openItem) return null; */
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
            <Banner img={openItem.img}/> 
            <Content>
                <HeaderContent>
                    <ProductName>
                        {openItem.name}
                    </ProductName>

                    <ProductPrice>
                        {formatCurrency(openItem.price)}
                    </ProductPrice>
                </HeaderContent>
                <CountItem {...counter} />
                {openItem.toppings && <Toppings {...toppings}/>}
                Choices
                {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{formatCurrency(totalPriceItems(order))}
                    </span>
                </TotalPriceItem>
                
                <ButtonCheckout onClick = {addToOrder}>
                    Добавить
                </ButtonCheckout>
            </Content>
            
            </Modal>
        </Overlay>
    )
};