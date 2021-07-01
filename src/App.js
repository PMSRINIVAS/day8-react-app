import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
/**
 * Special Function, because it returns JSX
 * METHOD
 * COMPONENT BOY/ GIRL
 * Method name :: Starts with Capital
 * If the method name startes with caps,-> React Component
 *
 * THIS FUNCTION IS CREATING CUSTOM TAG / COMPONENT,
 * <App />-->Name of the Tag is same as the name of the function
 *React Tags Starts with Capital Letter
 *
 * HTML has a SET OF PREDEFINED TAGS :: Can we create CUSTOM TAGS
 * <TAG-NAME></TAG-NAME>
 * <div></div>
 * <h1></h1>
 */
function App() {
  return (
    <div>
      <FruitApp />
      <NatureTag name="RIVER GANGA" />
      <CityApp name="Delhi" id="d" />
      <CityApp name="Kolkata" id="k" />
      <CityApp name="Mumbai" id="m" />
      <CityApp name="Chennai" id="c" />
    </div>
  );
}

/**
 * SPECIAL METHOD
 * COMPONENT BOY
 * IT RETURNS JSX
 * LOOKS AT THE METHOD NAME AS WELL
 *
 * It's Static programming
 * Rescue the prog to Dynamic--> FUNCTION PARAMETER :: USING THE CONCEPTS OF PROPS
 * <CityApp>
 */
function CityApp({ id, name }) {
  return (
    <h1>
      {id}:: {name}
    </h1>
  );
}
/**Problem solved, Now Its Dynamic Program */

/**
 * let {name}=props;--> Using Concepts of props to make the prog Dynamic
 */
function NatureTag(props) {
  return <h1>{props.name}</h1>;
}

/**
 * HARDCODED COMPONENT
 * <FruitApp />
 */
function FruitApp() {
  return <h1>Mango</h1>;
}

export default App;
