import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { navigationSliceReducers } from './store/navigation-slice';
import { themeSliceReducers } from './store/theme-slice';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';

import './index.css';

// Registering Syncfusion license key
registerLicense(
    'ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VhW31dcH1VTmFYVEM='
);

// Redux Store
const store = configureStore({
    reducer: {
        navigation: navigationSliceReducers,
        theme: themeSliceReducers,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
