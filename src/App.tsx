import { ThemeProvider } from "@mui/material";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import theme from "theme";
import enTranslation from "locales/en/translation.json";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "routes";
import { ServiceProvider } from "providers/serviceProvider";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: enTranslation,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources: resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

const UNSPLASH_ACCESS_TOKEN = process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN;
const BLOG_ACCESS_TOKEN = process.env.REACT_APP_BLOG_ACCESS_TOKEN;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ServiceProvider
                keys={{
                    unsplashKey: UNSPLASH_ACCESS_TOKEN,
                    blogKey: BLOG_ACCESS_TOKEN,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        {routes.map((layout, index) => (
                            <Route key={index} element={layout.element}>
                                {layout.routes.map((route, index) => (
                                    <Route
                                        key={route?.path ?? index}
                                        {...route}
                                    />
                                ))}
                            </Route>
                        ))}
                    </Routes>
                </BrowserRouter>
            </ServiceProvider>
        </ThemeProvider>
    );
}

export default App;
