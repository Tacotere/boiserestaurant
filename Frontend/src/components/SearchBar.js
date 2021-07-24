import { useState } from "react";
import RestaurantList from "./restaurantList";

const SearchBar = (props) => {
  let undeleted_list = props.list.filter(
    (establishment) => establishment.delete_status == 1
  );

  const [searchValue, searchState] = useState("");

  let searchedItems = undeleted_list.filter((element) => {
    if (
      element.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      element.genre.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return element;
    }
  });

  return (
    <div>
      <input
        type="text"
        className="searchbar"
        value={searchValue}
        placeholder="Search Name or Genre..."
        onChange={(event) => {
          searchState(event.target.value);
        }}
      />
      {!searchValue && <h2 className="PageTitle">All Restaurants</h2>}
      {searchValue && <h2 className="PageTitle">{searchValue}</h2>}
      <RestaurantList list={searchedItems} />
    </div>
  );
};

export default SearchBar;
