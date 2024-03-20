import Link from "next/link";

import { pageRouter } from "@/constants/page-router";

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        href={pageRouter.auth.signIn.url}
        className="text-cyan-600 text-center"
      >
        Go to auth page
      </Link>
    </div>
  );
}
