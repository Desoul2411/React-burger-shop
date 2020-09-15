import { useState, useEffect } from 'react';

export const useDB = database => {
    const [db,setdb] = useState(null);

    useEffect(() => {
        const dbRef = database.ref('goods'); // ref('goods') - указываем что хотим получить из remote database firebase
        dbRef.on('value', snapshot => {  // on - метод извлекющий данные (snapshot данных)
            setdb(snapshot.val())   // устанавливаем полученные данные
        });
    },[database]); // [database] - передаём зависимость от database
    return db;
}