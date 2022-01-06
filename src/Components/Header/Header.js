import "./Header.css";

export default function Header(props) {
  return (
    <>
      <header>
        <h1>{props.name} </h1>
      </header>
    </>
  );
}
