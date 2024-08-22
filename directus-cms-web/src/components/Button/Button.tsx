import React from "react";

// type alias
type ButtonComponentProps = React.ComponentPropsWithoutRef<"button">;

// interface & interface extending
interface ButtonProps extends ButtonComponentProps {
  // CSSProperties
  style: React.CSSProperties;
  // Record
  borderRadius: Record<string, number>;
  // Tuple
  padding: [number, number, number, number];
  // onClick Function
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // Children
  children: React.ReactNode;
}

export default function Button({
  children,
  type,
  borderRadius,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}
