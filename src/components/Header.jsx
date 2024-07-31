import logo from "../../public/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>quiz app</h1>
    </header>
  );
}
