import './App.css';
import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from './components/jugadores/Jugadores';
import EquipoSelect from "./components/equiposelect/EquipoSelect";
import "./styles.scss";
function App() {
  return (
      <Provider store={store}>
        <main>
          <h1>Manager</h1>
          <Jugadores />
          <EquipoSelect />
        </main>
      </Provider>
  )
}

export default App

