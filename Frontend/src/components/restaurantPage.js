import useFetch from "./useFetch";
import { useParams, useHistory } from "react-router-dom";
let url_backend = "http://localhost:3001";
let url_backend_getone = `${url_backend}/getone`;

const RestaurantPage = () => {
  const { id } = useParams();
  const { data, isPending } = useFetch(`${url_backend_getone}`);

  console.log(id); //returning as undefined

  let page_list = data[id - 1];

  return (
    <div className="restaurantPage">
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <h2>Name: {page_list.name} </h2>
          <p>Genre: {page_list.genre}</p>
          <p>Website: {page_list.website} </p>
          <p>Phone Number: {page_list.phone}</p>
          <p>Address: {page_list.address} </p>
          <p>Favorite Orders: {page_list.fav_orders}</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
