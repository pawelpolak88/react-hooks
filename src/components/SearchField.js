import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchField = () => {
  const [value, setValue] = useState("");
  const debounceCallback = useDebounce(searchTodos, 500);

  function searchTodos(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }

  const onChange = (event) => {
    setValue(event.target.value);
    debounceCallback(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchField;
