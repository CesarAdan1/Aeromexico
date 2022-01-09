import React from "react"
import { MainView } from "./views/main-view/MainView"
import { Provider } from "react-redux";
import { store } from "./state/redux/store";
import AppProvider from "./state/context/AppProvider";

const App = () => {

    return (
        <Provider store={store}>
          <AppProvider>
            <MainView />
          </AppProvider>
        </Provider>
        )
}

export default App

