import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        min-w-0
        max-w-[1320px]
        px-8
        sm:px-10
        lg:px-14
        xl:px-16
        2xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}
