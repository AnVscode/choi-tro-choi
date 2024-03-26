import Link from "next/link";

import { appRouter } from "@/constants/app-router";

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        href={appRouter.auth.signIn.url}
        className="text-cyan-600 text-center"
      >
        Go to auth page
      </Link>
    </div>
  );
}
