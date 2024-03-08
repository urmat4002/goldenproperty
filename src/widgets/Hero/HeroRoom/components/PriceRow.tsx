import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "@/app/providers/Context";
import { useWhatsApp } from "@/shared/api/hooks";
import { Button, Typography } from "@/shared/ui";

export const PriceRow: FC<{
  styles: CSSModuleClasses;
  pdfUrl: string | undefined;
  price: string | number | undefined;
  id: string | undefined;
}> = ({ styles, pdfUrl, price, id }) => {
  const { downloadCatalog } = useContext(ModalContext);
  const { whatsappUrl } = useWhatsApp(id);

  return (
    <div className={styles.priceRow}>
      <Typography variant="h2" color="gold" weight="bold">
        Price at: {price?.toString()} USD
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
