import styled from 'styled-components';



export const ButtonCheckout = styled.button`
    font-family: Roboto;
    display: block;
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
    background-color: #299B01;
    padding: 20px 75px;
    border-color: transparent;
    outline:none;
    transition-property: color,background-color,border-color;
    transition-duration: .2s;
    &:hover {
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
    &:disabled {
        color: #bbb;
        background-color:#ccc;
        border-color:#aaa;
    }
`;

/* export const Button = () => (
    <ButtonContainer>

    </ButtonContainer>
);
 */

