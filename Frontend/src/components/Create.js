import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../index.css";
let url_backend = "http://localhost:3001";
let url_backend_insert = `${url_backend}/insert`;

const Create = () => {
  const [name, nameState] = useState("");
  const [genre, genreState] = useState("");
  const [price, priceState] = useState("");
  const [fav_orders, favoriteItemsState] = useState("");
  const [isPending, pendingState] = useState(false);
  const history = useHistory();

  let submitForm = (event) => {
    event.preventDefault();

    pendingState(true);

    Axios.post(url_backend_insert, {
      name: name,
      genre: genre,
      price: price,
    }).then(() => {
      console.log("Successful Insert");
      history.push("/");
      pendingState(false);
    });
  };

  return (
    <div>
      <form className="createForm" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => {
            nameState(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Genre"
          required
          value={genre}
          onChange={(event) => {
            genreState(event.target.value);
          }}
        />

        <input
          classname="textbox1"
          type="text"
          required
          value={price}
          placeholder="Price"
          onChange={(event) => {
            priceState(event.target.value);
          }}
        />

        <input
          type="text"
          value={fav_orders}
          placeholder="Favorite Items"
          onChange={(event) => {
            favoriteItemsState(event.target.value);
          }}
        />

        {isPending && (
          <button className="submitButton" disabled>
            Loading...
          </button>
        )}
        {!isPending && <button className="submitButton">Submit Form</button>}
      </form>
    </div>
  );
};

export default Create;
