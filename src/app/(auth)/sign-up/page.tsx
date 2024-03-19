import Link from "next/link";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pageRouter } from "@/constants/page-router";
import FormSignUp from "@/app/(auth)/components/form-sign-up";

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
        <FormSignUp />
      </CardContent>
    </>
  );
}
