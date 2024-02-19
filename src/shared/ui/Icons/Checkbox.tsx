import React from "react";

interface CheckboxProps {
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
}: CheckboxProps) => {
  switch (checked) {
    case true: {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#4c4c4c"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          tabIndex={0}
          className="lucide lucide-check-square-2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    }
    case false: {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#4c4c4c"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          tabIndex={0}
          className="lucide lucide-check-square-2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
      );
    }
    default: {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#4c4c4c"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          tabIndex={0}
          className="lucide lucide-check-square-2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
      );
    }
  }
};
