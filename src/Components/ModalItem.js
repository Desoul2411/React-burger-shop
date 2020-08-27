import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './Button';

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




export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if(e.target.id === 'overlay') {
            setOpenItem(null);   // так openItem cстанет null (!openItem) и окно закроется (return null)
        }
    }

    if(!openItem) return null;
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
                        {openItem.price.toLocaleString('ru-Ru',
                            {style: 'currency', currency: 'RUB'})}
                    </ProductPrice>
                </HeaderContent>
                <ButtonCheckout>
                    Добавить
                </ButtonCheckout>
            </Content>
            
            </Modal>
        </Overlay>
    )
};