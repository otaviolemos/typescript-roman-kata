import React from "react";

import "./styles.css";

const Converter: React.FC = () => {
  return (
    <div id="converter">
      <form>
        <fieldset>
          <h3>Digite um número de 1 a 3999</h3>
          <div className="input-block">
            <input
              type="text"
              name="decimal"
              id="decimal"
              className="textbox"
            />
            <button type="button">Converter</button>
          </div>
        </fieldset>
      </form>
      <section className="result">
        <h4>O número romano correspondente é:</h4>
        <div className="input-block">
          <input type="text" readOnly />
        </div>
      </section>
    </div>
  );
};

export default Converter;
