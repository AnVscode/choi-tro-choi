import { ReactNode } from "react";

import Introduce from "@/app/(auth)/components/Introduce";
import { Card } from "@/components/ui/card";

interface IAuthLayout {
  readonly children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return (
    <div className="flex gap-2 justify-center items-center h-screen relative">
      <div className="flex-1 flex justify-center max-lg:hidden">
        <Introduce />
      </div>

      <div className="flex-1 self-center flex justify-center">
        <Card className="w-[70%] max-md:w-full">{children}</Card>
      </div>
    </div>
  );
}
