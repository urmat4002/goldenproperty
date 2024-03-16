import { FC, useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";

export const Search: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [isFocuse, setIsFocus] = useState(false);
  const inputRef = useRef(null);

  const handleClick: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const input = inputRef.current! as HTMLInputElement;
    input.focus();
    setIsFocus(true);
  };
  const handleOnBluer = () => {
    setSearchText("");
    setIsFocus(false);
  };
  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (searchText) {
      navigate(`/estates/?search=${searchText}`);
    }
  };

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <form
      className={styles.searchForm}
      onClick={handleClick}
      onBlur={handleOnBluer}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onBlur={handleOnBluer}
        data-focus={isFocuse}
      />
      <button
        className={styles.searchButton}
        onMouseDown={handleSearch}
        onBlur={handleOnBluer}
      >
        <SearchIcon />
      </button>
    </form>
  );
};
