import React from "react"

function Header() {
  return (
    <header>
      <img
        src={require('../images/Trollface.png')}
        alt='Problem?'
      />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header