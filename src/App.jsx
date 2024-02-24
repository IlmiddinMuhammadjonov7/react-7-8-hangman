import React, { createRef, useEffect, useRef, useState } from "react";

const App = () => {
  const [country, setCountry] = useState({
    name: "Australia",
    selected: false,
  });
  const [active, setActive] = useState([]);
  const [words, setWords] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);
  const words3 = useRef([words.map(() => createRef())]);

  const [soul, setSoul] = useState(7);
  function handleClick(index, word) {
    setActive([...active, word]);
    console.log(active);
    setSoul(soul - 1);
    setWords(words.filter((item)=>item!==word))
  }

  useEffect(()=>{
    if (active.length > 6) {
      document.getElementById('my_modal_2').showModal()
    }
  }, [active])
  return (
    <div>
      <div className="navbar">
        <span className="navbar-one">
          <img src={"/Group 56.svg"} alt="" /> COUNTRIES
        </span>
        <span className="navbar-one">
          {soul}
          <img src={"/Vector.svg"} alt="" />
        </span>
      </div>
      <div className="main">
        {country.name.split("").map((item) => (
          <div className="region">
            {active.map((item2) =>
              item2 == item.toUpperCase() ? item.toUpperCase() : null
            )}
          </div>
        ))}
      </div>
      <div className="letters">
        {words.map((word, index) => (
          <div className="letter" onClick={() => handleClick(index, word)}>
            {word}
          </div>
        ))}
      </div>
        <div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{active.every((item)=>item==country.name.split("")) ? "Tabriklaymiz yutdizngiz" : "Afsus yutqazdingiz"}</h3>
              <p className="py-4">Qaytadan urinib ko'ring</p>
            </div>
            <form method="dialog" onSubmit={()=>setActive([])} className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
    </div>
  );
};

export default App;
