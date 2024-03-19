import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pageRouter } from "@/constants/page-router";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">Xin chào</CardTitle>
        <CardDescription className="text-center">
          Chào mừng bạn đến với chơi trò chơi, nếu chưa có tài khoản, bạn có thể
          đăng ký tài khoản mới{" "}
          <Link
            href={pageRouter.auth.signUp.url}
            className="underline font-bold"
          >
            tại đây
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent>
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
              <Button variant="outline">Về trang chủ</Button>

              <Button>Đăng nhập</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
}
