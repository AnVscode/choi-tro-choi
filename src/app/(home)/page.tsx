import Link from "next/link";

import { pageRouter } from "@/constants/page-router";

export default function HomePage() {
  return (
    <div>
      <Link href={pageRouter.auth.signIn.url}>Go to auth page</Link>
    </div>
  );
}
