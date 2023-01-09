import React, {FC, createContext} from 'react'; //of type Functional Component
import './App.css';
import { Person, HairColor} from "./components/Person";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null >(null)

const App: FC = () =>  {
  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil"
  }

  return (
    <AppContext.Provider value={contextValue}>
        <div className="App">
            <Person name="pedro" age={20} email="pedro@email.com" hairColor={HairColor.Blonde} />
        </div>
    </AppContext.Provider>

  );
}

export default App;
