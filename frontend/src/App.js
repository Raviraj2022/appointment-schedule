import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SignUpForm from "./components/SignUp";
import SignInPage from "./components/SignIn";

function App() {
  return (
    <div>
      <Header />
      <SignUpForm />
      <SignInPage />
    </div>
  );
}

export default App;
