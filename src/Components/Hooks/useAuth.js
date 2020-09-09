import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
    const [authentication, setAuthentication] = useState(null);

    const auth = authFirebase(); // получили объект с необходимыми методами

    const provider = new authFirebase.GoogleAuthProvider(); 

    const logIn = () => auth.signInWithPopup(provider); // будет открываться google окно

    const logOut = () => auth.signOut()   // возвращает promise
        .then()
        .catch(err => console.error());

    useEffect(() => {  // useEffect запускается при каждом рендере компонента
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setAuthentication(user);
            } else {
                setAuthentication(null);
            }
        })
    }, [auth,authentication]);  //-список зависимостей.  // если authentication изменится, то cколбэк внутри useEffect запустится.

    return { authentication, logIn, logOut};  //authentication - объект который хранит все данные пользователя, кторый авторизовался // login - ф-ция, которая будет хапускать авторизацию
}