import React from "react";

import { ConvertContainer, InputBlock, TextBox } from "./styles";

const Converter: React.FC = () => {
  return (
    <ConvertContainer>
      <form>
        <fieldset>
          <h3>Digite um número de 1 a 3999</h3>
          <InputBlock>
            <input
              type="text"
              name="decimal"
              id="decimal"
              className="textbox"
            />
            <button type="button">Converter</button>
          </InputBlock>
        </fieldset>
      </form>
      <section className="result">
        <h4>O número romano correspondente é:</h4>
        <InputBlock>
          <TextBox type="text" readOnly />
        </InputBlock>
      </section>
    </ConvertContainer>
  );
};

export default Converter;
