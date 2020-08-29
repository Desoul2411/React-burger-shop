import React from 'react';
import NavBar from "./Components/NavBar/NavBar";
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem} from './Components/Modal/ModalItem';
import { Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';



function App() {
  const openItem = useOpenItem(); // {openItem, setOpenItem}
  const orders = useOrders();  //{orders, setOrders}



  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} />
      <Menu {...openItem} />
      { openItem.openItem &&  <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;

/* openItem - данные товара, который хотим открыть в модальном окне */
/* setOpenItem = ф-ция, назначающая этот товар (при клике на него) и выполняющая перерендер компонента */
/* { openItem.openItem &&  <ModalItem {...openItem}/> }  - если в объекте opemItem будет св-во openItem (true), то вернёт вёрстку <ModalItem {...openItem}/> */