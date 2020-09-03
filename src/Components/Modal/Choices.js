import React from 'react';
import styled from 'styled-components';


const ChoicesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
    dipslay: block;
    flex-basis: 50%;
`;



export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выбирайте:</h3>
            <ChoicesWrap>
                {openItem.choices.map((item,i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio 
                            type="radio"
                            name="choices"
                            checked={choice === item}  
                            value={item}
                            onChange={changeChoices} 
                            />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoicesWrap>
        </>
    )
}