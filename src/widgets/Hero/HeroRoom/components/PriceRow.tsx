import { FC } from "react";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/shared/api/hooks";
import { Typography } from "@/shared/ui";
import { useModalContext } from "@/app/providers/useModalContext";
import { GButton } from "@/shared/ui/Button/GButton";

export const PriceRow: FC<{
  styles: CSSModuleClasses;
  pdfUrl: string | undefined;
  price: string | number | undefined;
  id: string | undefined;
}> = ({ styles, pdfUrl, price, id }) => {
  const { downloadCatalog } = useModalContext();
  const { whatsappUrl } = useWhatsApp(id);

  const handleDownloadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
    if (e.ctrlKey && e.shiftKey) {
      localStorage.removeItem("questionnaire");
    }
    downloadCatalog(pdfUrl);
  };

  return (
    <div className={styles.priceRow}>
      <Typography variant="h2" color="gold" weight="bold">
        <span className={styles.priceAt}>Price at: </span>{" "}
        <span>{price?.toLocaleString("en")} USD</span>
      </Typography>

      <div className={styles.buttons}>
        <GButton
          variant="download"
          className={styles.priceBtnsItem}
          onClick={handleDownloadClick}
        >
          Catalog
        </GButton>

        <Link to={whatsappUrl} target="_blank">
          <GButton className={styles.priceBtnsItem} variant="whatsapp">
            WhatsApp
          </GButton>
        </Link>
      </div>
    </div>
  );
};
