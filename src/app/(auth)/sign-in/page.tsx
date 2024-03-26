import Link from "next/link";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { appRouter } from "@/constants/app-router";
import FormSignIn from "@/app/(auth)/components/form-sign-in";

export default function SignInPage() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-center">Xin chào</CardTitle>
        <CardDescription className="text-center">
          Chào mừng bạn đến với chơi trò chơi, nếu chưa có tài khoản, bạn có thể
          đăng ký tài khoản mới{" "}
          <Link
            href={appRouter.auth.signUp.url}
            className="underline font-bold"
          >
            tại đây
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <FormSignIn />
      </CardContent>
    </>
  );
}
