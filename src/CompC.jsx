import React from 'react';
import { FirstName, LastName } from './App';
// here we are importing that FirstName from the app component

const CompC = () => {
  return (
    <>
      {/*here we are making consumer for using that data and after creating function they only want function  and in our case we are using callback function*/}
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    Namaste {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
// here we are passed our data from parent to compC without touching compA and compB

export default CompC;
