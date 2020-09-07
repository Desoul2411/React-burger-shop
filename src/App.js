import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from "./Components/NavBar/NavBar";
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem} from './Components/Modal/ModalItem';
import { Order} from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyDFsOiXB3NY-mSJYhfoNCNMcZeemxuDuGE",
  authDomain: "burger-shop-e8296.firebaseapp.com",
  databaseURL: "https://burger-shop-e8296.firebaseio.com",
  projectId: "burger-shop-e8296",
  storageBucket: "burger-shop-e8296.appspot.com",
  messagingSenderId: "546263153275",
  appId: "1:546263153275:web:4413ed7dd78560c0a9c0de"
};

firebase.initializeApp(firebaseConfig);


function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem(); // {openItem, setOpenItem} // хук, открывающий модальное окно 
  const orders = useOrders();  //{orders, setOrders}

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/> {/* передали openItem чтобы могли в Order открывать модальное окно */}
      <Menu {...openItem} />
      { openItem.openItem &&  <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;

/* openItem - данные товара, который хотим открыть в модальном окне */
/* setOpenItem = ф-ция, назначающая этот товар (при клике на него) и выполняющая перерендер компонента */
/* { openItem.openItem &&  <ModalItem {...openItem}/> }  - если в объекте opemItem будет св-во openItem (true), то вернёт вёрстку <ModalItem {...openItem}/> */