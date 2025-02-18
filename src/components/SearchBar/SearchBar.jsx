import { useState } from "react"
import toast from "react-hot-toast";

const SearchBar = ({handleSetRequest}) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      toast.error("Enter parameters for search!", {
        duration: 3000,
        position: "top-right",
      });
      return
    }
    handleSetRequest(value)
  }
    
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
              <button type="submit">Search</button>
          </form>
      </header>
    )
}

export default SearchBar