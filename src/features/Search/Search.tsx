import { SearchIcon } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "@/shared/ui";
import styles from "./Search.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Search: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    navigate(`/estates/?search=${searchText}`);
  };

  return (
    <div className={styles.search}>
      <form className={styles.search__form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search__input}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <Button type="icon" onClick={() => handleSearch}>
          <SearchIcon color="#B9BCBE" />
        </Button>
      </form>
    </div>
  );
};
