"use client";
import * as React from "react";
import { toast } from "sonner";

export default function SystemDetect() {
  const [os, setOs] = React.useState<string>("...Loading");
  const [version, setVersion] = React.useState<string>("...Loading");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent: string = navigator.userAgent;

      const isAndroid: boolean = /Android/i.test(userAgent);
      const isIos: boolean = /iPhone|iPad|iPod/i.test(userAgent);

      if (isAndroid) {
        setOs("Android");
        const androidVersion: RegExpMatchArray | null =
          userAgent.match(/Android\s+([\d.]+)/i);
        setVersion(androidVersion ? androidVersion[1] : "Không xác định");
        toast.warning(
          `Bạn đang truy cập trang web từ thiết bị ${os} ${version}. Sử dụng Windows sẽ đem lại trải nghiệm tốt nhất`,
          {
            position: "top-center",
            duration: 15000,
            classNames: { title: "text-center" },
          },
        );
      }

      if (isIos) {
        setOs("iOS");
        const iosVersion: RegExpMatchArray | null =
          userAgent.match(/OS\s+(\d+_\d+)/i);
        setVersion(
          iosVersion ? iosVersion[1].replace(/_/g, ".") : "Không xác định",
        );
        toast.warning(
          `Bạn đang truy cập trang web từ thiết bị sử dụng ${os} ${version}. Sử dụng Windows để đem lại trải nghiệm tốt nhất`,
          {
            position: "top-center",
            duration: 15000,
            classNames: { title: "text-center" },
          },
        );
      }
    }
  }, [os, version]);

  return <div className="absolute"></div>;
}
