import React, {FC} from 'react';  //of type Functional Component
import './App.css';
import {Person} from "./components/Person";

const App: FC = () =>  {

  return (
    <div className="App">
      <Person name="pedro" age={20} email="pedro@email.com" />
    </div>
  );
}

export default App;
