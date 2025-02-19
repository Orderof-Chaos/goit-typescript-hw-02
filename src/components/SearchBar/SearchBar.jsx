import { useState } from "react"
import toast from "react-hot-toast"
import s from "./SearchBar.module.css"

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
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
              <button type="submit" className={s.searchButton}>Search</button>
          </form>
    )
}

export default SearchBar