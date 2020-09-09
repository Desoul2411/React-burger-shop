import { useEffect} from 'react';

export const useTitle = openItem => {
    useEffect(() => {
        document.title = openItem ? openItem.name : `MRDonald's`;  // если openItem есть, то заносим его name в title
        console.log(openItem);
    },{openItem});  // добавили  вторым эл-м {openItem} чтобы useEffect не вызывался постоянно (напр. при удалении закзазов из списка)
};