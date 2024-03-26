import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center max-w-[600px] gap-5">
        <Image src="./not-found.svg" alt="not-found" width={120} height={120} />

        <div className="text-center text-4xl font-bold">
          Trang không tồn tại
        </div>

        <div className="text-center">
          Xin lỗi nhưng trang bạn đang truy cập không tồn tại, đã bị xóa hoặc
          đổi thành{" "}
          <Link href="/" className="underline font-bold">
            tên khác
          </Link>
        </div>
      </div>
    </div>
  );
}
