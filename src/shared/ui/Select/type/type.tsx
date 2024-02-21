export interface SelectItem {
  id: number;
  label: string;
}

export interface SelectProps {
  value: SelectItem[];
  options?: SelectItem[];
  placeholder: string;
  checkbox?: boolean;
  onChange: (_option: SelectItem[]) => void;
}
