import { ReactNode } from "react";

interface IAuthLayout {
  readonly children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return <div>{children}</div>;
}
