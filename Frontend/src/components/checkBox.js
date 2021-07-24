import { useState } from "react";
import useFetch from "./useFetch";

import SearchBar from "./SearchBar";
let url_backend = "http://localhost:3001";
let url_backend_getall = `${url_backend}/getall`;

const CheckBox = () => {
  const [checkState1, setIsChecked1] = useState(true);
  const [checkState2, setIsChecked2] = useState(true);
  const [checkState3, setIsChecked3] = useState(true);

  const { data, isPending } = useFetch(url_backend_getall);

  let handleCheck1 = () => {
    setIsChecked1(!checkState1);
  };
  let handleCheck2 = () => {
    setIsChecked2(!checkState2);
  };
  let handleCheck3 = () => {
    setIsChecked3(!checkState3);
  };

  const asArray = Object.entries(data);

  const oneDollarObject = [].filter.call(data, ({ price }) => price === "$");

  const twoDollarObject = [].filter.call(data, ({ price }) => price === "$$");

  const threeDollarObject = [].filter.call(
    data,
    ({ price }) => price === "$$$"
  );

  const oneTwoDollarObject = [].filter.call(
    data,
    ({ price }) => price === "$" || price === "$$"
  );

  const oneThreeDollarObject = [].filter.call(
    data,
    ({ price }) => price === "$" || price === "$$$"
  );

  const twoThreeDollarObject = [].filter.call(
    data,
    ({ price }) => price === "$$" || price === "$$$"
  );

  return (
    <div>
      <div className="checklistContainer">
        <div className="checkboxContainer">
          <input
            type="checkbox"
            id="dollar_single"
            checked={checkState1}
            onChange={handleCheck1}
          />
          <label for="$">$</label>
        </div>
        <div className="checkboxContainer">
          <input
            type="checkbox"
            id="dollar_double"
            checked={checkState2}
            onChange={handleCheck2}
          />
          <label for="$$">$$</label>
        </div>
        <div className="checkboxContainer">
          <input
            type="checkbox"
            id="dollar_triple"
            checked={checkState3}
            onChange={handleCheck3}
          />
          <label for="$$$">$$$</label>
        </div>
      </div>
      <div>{isPending && <div>Loading...</div>}</div>

      <div>
        {data &&
          checkState1 === true &&
          checkState2 === true &&
          checkState3 === true && <SearchBar list={data} />}
      </div>

      <div>
        {checkState1 === true &&
          checkState2 === false &&
          checkState3 === false && <SearchBar list={oneDollarObject} />}
      </div>

      <div>
        {checkState1 === false &&
          checkState2 === true &&
          checkState3 === false && <SearchBar list={twoDollarObject} />}
      </div>

      <div>
        {checkState1 === false &&
          checkState2 === false &&
          checkState3 === true && <SearchBar list={threeDollarObject} />}
      </div>

      <div>
        {checkState1 === true &&
          checkState2 === true &&
          checkState3 === false && <SearchBar list={oneTwoDollarObject} />}
      </div>

      <div>
        {checkState1 === true &&
          checkState2 === false &&
          checkState3 === true && <SearchBar list={oneThreeDollarObject} />}
      </div>

      <div>
        {checkState1 === false &&
          checkState2 === true &&
          checkState3 === true && <SearchBar list={twoThreeDollarObject} />}
      </div>
    </div>
  );
};

export default CheckBox;
