import { FC, useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useGetStaticData } from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";

export const Search: FC = () => {
  const { staticData } = useGetStaticData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const runSearch = () => {
    navigate(`/estates/?search=${searchText}`);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (searchText) {
      runSearch();
      return;
    }
    inputRef.current?.focus();
  };

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (searchText) {
      runSearch();
    }
  };

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <label className={styles.searchLabel} htmlFor="search">
        <input
          className={styles.searchInput}
          id="search"
          ref={inputRef}
          type="text"
          placeholder={capitalize(staticData?.body.search) || "Search"}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button
          type="button"
          className={styles.searchButton}
          onClick={handleClick}
        >
          <SearchIcon />
        </button>
      </label>
    </form>
  );
};
