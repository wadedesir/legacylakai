import { useState } from "react";

import Nav from "../components/Nav.js";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Nav />
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
