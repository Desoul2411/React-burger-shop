import React from 'react';
import styled from 'styled-components';


const ToppingWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ToppingLabel = styled.label`
    cursor: pointer;
    dipslay: block;
    flex-basis: 50%;
`;

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 13px;
    margin-bottom: 20px;
`;

export function Toppings({ toppings, checkToppings }) {
    return (
        <>
            <h3>Добавки</h3>
            <ToppingWrap>
                {toppings.map((item,i) => (
                    <ToppingLabel key={i}>
                        <ToppingCheckbox 
                            type="checkbox"
                            checked={item.checked}  // checked если item.checked
                            onChange={() => checkToppings(i)}  // передаём в checkToppings индекс элемента по которому кликнули и там сравниваем его со списком toppings
                            />
                        {item.name}
                    </ToppingLabel>
                ))}
            </ToppingWrap>
        </>
    )
}