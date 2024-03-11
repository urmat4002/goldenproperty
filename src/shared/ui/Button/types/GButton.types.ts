type GButtonType = "download" | "navigate" | "whatsapp";

export interface GButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: GButtonType;
  disabled?: boolean;
  children: string | undefined;
  fullWidth?: boolean;
}
