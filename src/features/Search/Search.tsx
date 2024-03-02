import { SearchIcon } from "lucide-react";
import { FC, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useQuery } from "@tanstack/react-query";

export const Search: FC = () => {
  const { refetch } = useQuery({ queryKey: ["estates"] });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTimeout(() => {
      if (refetch) refetch();
    }, 0);
    navigate(`/estates/?search=${searchText}`);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );
};
