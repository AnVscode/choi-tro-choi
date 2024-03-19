import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { pageRouter } from "@/constants/page-router";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">Tạo tài khoản</CardTitle>
        <CardDescription className="text-center">
          Chào mừng bạn đến với chơi trò chơi, nếu đã có tài khoản, bạn có thể
          đăng nhập{" "}
          <Link
            href={pageRouter.auth.signIn.url}
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

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Nhập lại mật khẩu</Label>
              <Input id="password" placeholder="Nhập lại mật khẩu của bạn" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="account_type">Loại tài khoản</Label>
              <Select>
                <SelectTrigger id="User">
                  <SelectValue placeholder="Loại tài khoản" />
                </SelectTrigger>

                <SelectContent position="popper">
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="User">Người dùng</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between">
              <Button variant="outline">Về trang chủ</Button>
              <Button>Đăng ký</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
}
