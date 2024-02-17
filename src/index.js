import React from 'react'; // подключение к реакту 
import ReactDOM from 'react-dom/client'; // импорт ракут DOM 
import App from './App'; // импорт проекта
import reportWebVitals from './reportWebVitals'; // подключение доп. библеотеки для определения производительности

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/*подключение app.js*/}
  </React.StrictMode>
);

reportWebVitals();
