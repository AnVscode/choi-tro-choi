"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pageRouter } from "@/constants/page-router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function FormSignUp() {
  const appRouterInstance: AppRouterInstance = useRouter();

  const handlerBackToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    appRouterInstance.push(pageRouter.home.url);
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

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Nhập lại mật khẩu</Label>
          <Input id="password" placeholder="Nhập lại mật khẩu của bạn" />
        </div>

        {/*<div className="flex flex-col space-y-1.5">*/}
        {/*  <Label htmlFor="account_type">Loại tài khoản</Label>*/}
        {/*  <Select>*/}
        {/*    <SelectTrigger id="User">*/}
        {/*      <SelectValue placeholder="Loại tài khoản" />*/}
        {/*    </SelectTrigger>*/}

        {/*    <SelectContent position="popper">*/}
        {/*      <SelectItem value="Admin">Admin</SelectItem>*/}
        {/*      <SelectItem value="User">Người dùng</SelectItem>*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*</div>*/}

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlerBackToHome}>
            Về trang chủ
          </Button>
          <Button type="submit">Đăng ký</Button>
        </div>
      </div>
    </form>
  );
}
