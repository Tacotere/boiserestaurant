import { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import useFetch from "./useFetch";
import RestaurantPage from "./restaurantPage";
let url_backend = "http://localhost:3001";

let url_backend_edit = `${url_backend}/edit/`;

const EditPage = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fav_orders, setOrders] = useState("");

  let editForm = (event) => {
    event.preventDefault();

    axios
      .put(`${url_backend_edit}${id}`, {
        name: name,
        genre: genre,
        website: website,
        phone: phone,
        address: address,
        fav_orders: fav_orders,
      })
      .then(() => {
        console.log("Successful Edit");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="editPage">
      <form className="editForm" onSubmit={editForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Favorite Orders"
          value={fav_orders}
          onChange={(event) => {
            setOrders(event.target.value);
          }}
        />
        <button className="submitButton">Submit Edit</button>
      </form>

      <RestaurantPage />
    </div>
  );
};

export default EditPage;
