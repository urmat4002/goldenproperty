import { FC } from "react";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/shared/api/hooks";
import { Button, Typography } from "@/shared/ui";
import { useModalContext } from "@/app/providers/useModalContext";

export const PriceRow: FC<{
  styles: CSSModuleClasses;
  pdfUrl: string | undefined;
  price: string | number | undefined;
  id: string | undefined;
}> = ({ styles, pdfUrl, price, id }) => {
  const { downloadCatalog } = useModalContext();
  const { whatsappUrl } = useWhatsApp(id);

  return (
    <div className={styles.priceRow}>
      <Typography variant="h2" color="gold" weight="bold">
        <span className={styles.priceAt}>Price at: </span>{" "}
        <span>{price?.toLocaleString("en")} USD</span>
      </Typography>

      <div className={styles.buttons}>
        <Button
          customClasses={styles.priceBtnsItem}
          onClick={() => downloadCatalog(pdfUrl)}
          type="primary"
        >
          Catalog
        </Button>

        <Link to={whatsappUrl} target="_blank">
          <Button customClasses={styles.priceBtnsItem} type="primary">
            WhatsApp
          </Button>
        </Link>
      </div>
    </div>
  );
};
