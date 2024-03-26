"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { appRouter } from "@/constants/app-router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function FormSignIn() {
  const appRouterInstance: AppRouterInstance = useRouter();

  const handlerBackToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    appRouterInstance.push(appRouter.home.url);
  };

  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="user_name">Tên đăng nhập</Label>
          <Input id="user_name" placeholder="Tên đăng nhập của bạn" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" placeholder="Mật khẩu của bạn" />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlerBackToHome}>
            Về trang chủ
          </Button>

          <Button type="submit">Đăng nhập</Button>
        </div>
      </div>
    </form>
  );
}
