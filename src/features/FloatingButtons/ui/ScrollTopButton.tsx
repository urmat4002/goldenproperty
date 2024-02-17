import { FC } from "react";

export const ScrollTopButton: FC<{ styles: CSSModuleClasses }> = ({
  styles,
}) => {
  return (
    <a
      className={styles.button}
      aria-label="Scroll to top of the page"
      href="#"
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="70" height="70" rx="35" fill="#C6A15B" />
        <path
          d="M35 51.25C34.3096 51.25 33.75 50.6904 33.75 50V20C33.75 19.3097 34.3096 18.75 35 18.75C35.6904 18.75 36.25 19.3097 36.25 20V50C36.25 50.6904 35.6904 51.25 35 51.25Z"
          fill="white"
        />
        <path
          d="M24.1161 30.8838C23.628 30.3957 23.628 29.6042 24.1161 29.116L34.1161 19.116C34.6043 18.6279 35.3957 18.6279 35.8839 19.116L45.8839 29.116C46.372 29.6042 46.372 30.3957 45.8839 30.8838C45.3957 31.372 44.6043 31.372 44.1161 30.8838L35 21.7677L25.8839 30.8838C25.3957 31.372 24.6043 31.372 24.1161 30.8838Z"
          fill="white"
        />
      </svg>
    </a>
  );
};
