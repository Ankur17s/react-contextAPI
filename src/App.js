import React, { createContext } from "react";
import "./style.css";
import CompA from './CompA'
// here we are making three components compA, compB or compC and passing data to compC through compA and CompB by using prop drilling 
// if we want to pass data from parent to compC so in that case we are passing data to compA and CompB which is not useful so here we are using ContextAPI for passing data to CompC directly from parent compA

// React hooks provide a concept call context
// React Context API allows us to easily access data at different levels of the component tree, without passing prop to every level

// we have three steps to achieve contextAPI
// 1--> firstly we have to --createContext-- for passing data
// 2--> after creating Context we need a --provider-- so that it can be used further
// 3--> if provider gives us some data than we need to consume that data so for that we have a --consumer-- for use that data

// Here we are creating our createContext
const FirstName = createContext();
const LastName = createContext();

export default function App() {
  return (
    <div>

      {/* here we are making our provider for passing data with having value and value will pass to the compC without touching comA and compB*/}
     
      <FirstName.Provider value={'Ankur'}> 
        <LastName.Provider value={'Srivastav'}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
  
    </div>
  );
}

export default App; 
export {FirstName, LastName};
// here we are passsing that first component
