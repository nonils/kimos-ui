import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './styles.scss';
import English from './lang/en.json';
import Spanish from './lang/es.json';
import { IntlProvider } from 'react-intl';
import 'react-toastify/dist/ReactToastify.min.css';
import 'tailwindcss/tailwind.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { AuthenticationGuard } from './components';
import { ProfilePage } from './pages/app/ProfilePage';
import { HomePage } from './pages/HomePage';
import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate';
import { DashboardPage } from './pages/app/DashboardPage';
import { BillingPage } from './pages/app/Profile/BillingPage';
// @ts-ignore
const root = createRoot(document.getElementById('root') as HTMLElement);
const locale = navigator.language;
const langMap: { [key: string]: any } = {
  es: Spanish,
  en: English,
};
let messages = langMap[locale];
messages = messages === undefined ? Spanish : messages;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <Auth0ProviderWithNavigate>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
              <Route
                path="/settings/billing"
                element={<AuthenticationGuard component={BillingPage} />}
              />
              {/*Agregar redirect para settings*/}
              <Route
                path="/dashboard"
                element={<AuthenticationGuard component={DashboardPage} />}
              />
            </Routes>
          </Auth0ProviderWithNavigate>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
);
reportWebVitals();
