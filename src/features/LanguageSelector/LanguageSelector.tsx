/* eslint-disable no-unused-vars */
import { FC, useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { Typography } from "@/shared/ui";
import styles from "./LanguageSelector.module.scss";

enum Language {
  Arabic 	= "ar",
  Turkish = "tr",
  English = "en",
  Russian = "ru",
}

// Notification: При реверсе страницы заголовок не меняет положение! нужно исправить

export const LanguageSelector: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Dayan: строгая типизация с помощью enum и отображение актуального языка
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const storeLanguage = localStorage.getItem("language") as Language;
    return storeLanguage || Language.English;
  });
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
    updateDirections(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    updateDirections(selectedLanguage);
  }, [selectedLanguage]);

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

  // Dayan: Реверс страницы при выборе арабского языка
  const updateDirections = (language: Language) => {
    document.documentElement.dir = language === Language.Arabic ? "rtl" : "ltr";
  };

  return (
    <div className={styles.language} ref={selectRef}>
      <div
        className={styles.languagePlaceholder}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe color="white" width={20} />
        <Typography variant="body" weight="regular" color="white">
          {selectedLanguage}
        </Typography>
        <ChevronDown color="white" width={20} />
      </div>
      {isOpen && (
        <div className={styles.languageOptions}>
          {/* Dayan: фича для итерации по enum*/}
          {Object.values(Language).map((lang) => (
            <div
              key={lang}
              className={styles.languageOption}
              onClick={() => {
                handleLanguageChange(lang),
                setIsOpen(!isOpen)}
              }
            >
              <Typography variant="body" weight="regular">
                {lang}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
