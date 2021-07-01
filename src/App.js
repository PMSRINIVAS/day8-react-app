import logo from "./logo.svg";
import "./App.css";
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
      <CityApp />
      <CityApp />
      <CityApp />
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
 * <CityApp>
 */
function CityApp() {
  return <h1>CHENNAI</h1>;
}
export default App;
