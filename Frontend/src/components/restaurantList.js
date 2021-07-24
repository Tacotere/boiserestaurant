import { Link } from "react-router-dom";
import axios from "axios";
let url_backend = "http://localhost:3001";
let url_backend_delete = `${url_backend}/logicDelete/`;

let handleDelete = (id) => {
  axios
    .put(`${url_backend_delete}${id}`)
    .then(() => {
      console.log("Successful Delete");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const RestaurantList = (props) => {
  return (
    <div>
      <div className="restaurant_list">
        {props.list.map((establishment) => {
          return (
            <div className="restaurant_card" key={establishment.id}>
              <Link to={`/card/${establishment.id}`}>
                <h2>{establishment.name}</h2>
              </Link>
              <p>{establishment.genre}</p>
              <p>{establishment.price}</p>
              <Link to={`/edit/${establishment.id}`}>
                <button>
                  <img
                    className="smallpic"
                    src="https://image.flaticon.com/icons/png/512/1159/1159633.png"
                  />
                </button>
              </Link>

              <button
                className="deleteButton"
                onClick={() => {
                  handleDelete(`${establishment.id}`);
                }}
              >
                <img
                  className="smallpic"
                  src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
