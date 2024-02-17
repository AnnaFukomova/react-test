import { useEffect, useRef } from "react";
import { useLocalStorage } from '../../utils/useLocalSorage';
import detectDarkMode from "../../utils/detectDarkMode";

import sum from "./img/sun.svg";
import moon from "./img/moon.svg";
import "./style.css"

const BtnDarkMode = () => {
    // detectDarkMode определяет иему по системным настройкам. useLocalStorage - кастомный хук, который  заводит состяник и созраняет его (при обновлении страницы тема сохранится)
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode()); 

    // useRef - это хук React, позволяющий ссылаться на значение, которое не нужно для рендеринга
    const btnRef = useRef(null); //объект
    
    
    // хук React, который позволяет вам синхронизировать компонент с внешней системой
    useEffect(()=> {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode]);
    // сработает только 1 раз при первичном рендере компонента
    useEffect(() => {
        // меняются при изменении системных настроек: меняем тему
        window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorScheme)            
        });
    }, [])

    const toggleDarkMose = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMose}>
            <img src={sum} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}
export default BtnDarkMode;