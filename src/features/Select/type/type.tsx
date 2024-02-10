export type SelectItem = {
  id: number;
  label: string;
};

export type SelectProps = {
  value?: SelectItem;
  options?: SelectItem[];
  placeholder: string;
  onChange: (_value: SelectItem | undefined) => void;
};
