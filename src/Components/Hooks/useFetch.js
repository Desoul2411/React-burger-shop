import { useEffect , useState } from 'react';


//получение данных из JSON. useFetch может принимать url
export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
            const json = await fetch('DB.json');
            const res = await json.json();
            setResponse(res);
        } catch(err) {
            setError(err);
            }
        };
        fetchData();
    }, []); // [] - пустой массив зависимостей, чтобы фунция запускалась один раз.  Если есть зависимости - ф-ция useEffect будет запускаться только при изменении в них. Если ничего не передать - будет запускаться постоянно.
    return { response, error};
}
