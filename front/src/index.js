// el inicio de la app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import cssVinos from './style/vinos.scss'
import form from './style/formAdm.scss'


//Todavia no podemos utilizar el provider porque no tenemos reducers en el store
// en el momento en el que empezemos a codear esto , borrar los comentarios

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Main} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);