import { FC, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDown, Globe } from "lucide-react";
import { Typography } from "@/shared/ui";
import styles from "./LanguageSelector.module.scss";
import clsx from "clsx";

/* eslint-disable no-unused-vars */
enum Language {
  Arabic = "ar",
  Turkish = "tr",
  English = "en",
  Russian = "ru",
}
/* eslint-enable no-unused-vars */

const userLocale =
  navigator.languages &&
  (navigator.languages.length
    ? navigator.languages[0]
    : navigator.language
  ).substring(0, 2);

export const LanguageSelector: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const storeLanguage = localStorage.getItem("language") as Language;
    if (storeLanguage) return storeLanguage;
    if (Object.values(Language).includes(userLocale as Language))
      return userLocale as Language;
    return Language.English;
  });

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
    updateDirections(selectedLanguage);
    queryClient.invalidateQueries();
  }, [selectedLanguage, queryClient]);

  // Dayan: Закрытие при нажатии вне опций языка
  useEffect(() => {
    const handleClickOutside: EventListener = (event: Event) => {
      const target = event.target as Node;
      if (selectRef.current && !selectRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(true);
  };

  const updateDirections = (language: Language) => {
    document.documentElement.dir = language === Language.Arabic ? "rtl" : "ltr";
  };

  return (
    <div
      className={styles.language}
      ref={selectRef}
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.indicator}>
        <Globe width={20} />
        <Typography
          className={styles.indicatorText}
          variant="body"
          weight="regular"
          color="white"
        >
          {selectedLanguage}
        </Typography>
        <ChevronDown
          width={20}
          className={clsx(styles.chevron, isOpen && styles.open)}
        />
      </div>

      <div className={clsx(styles.options, isOpen && styles.open)}>
        {Object.values(Language).map((lang) => (
          <div
            key={lang}
            className={styles.languageOption}
            onClick={() => {
              handleLanguageChange(lang), setIsOpen(false);
            }}
          >
            <Typography variant="body" weight="regular">
              {lang}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
