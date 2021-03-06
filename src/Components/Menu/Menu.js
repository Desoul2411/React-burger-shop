import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner'; 
/* import dbMenu from '../DBMenu'; */
/* import { useFetch } from '../Hooks/useFetch'; */
import Spinner from '../../image/spinner.gif';



const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;



export const Menu = ({dbMenu}) => {

    /* const res = useFetch();
    console.log(res) */
   /*  const dbMenu = res.response;  */// данные в св-ве response
  /*  const { openItem: {setOpenItem}} = useContext(Context); */

    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ?
            <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem 
                        itemList={dbMenu.burger}
                        /* setOpenItem={setOpenItem}  */  // setOpenItem получим через Context сразу в ListItem
                    />
                </SectionMenu>

                <SectionMenu>
                    <h2>Закуски/ Напитки</h2>
                    <ListItem 
                        itemList={dbMenu.other}
                        /* setOpenItem={setOpenItem}  */
                    />
                </SectionMenu>
            </> : /* res.error ?
            <div>Sorry, we will fix it...</div> : */
            <img src={Spinner} alt="анимация загрузки"/> 
            }
        </MenuStyled>
    )
}


/* export default Menu; */