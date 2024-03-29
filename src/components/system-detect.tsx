"use client";
import * as React from "react";

import { toast } from "sonner";

export default function SystemDetect() {
  const [os, setOs] = React.useState<string>("...Loading");
  const [version, setVersion] = React.useState<string>("...Loading");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent;

      const isAndroid = /Android/i.test(userAgent);
      const isIos = /iPhone|iPad|iPod/i.test(userAgent);
      const isWindows = /IEMobile|Windows/i.test(userAgent);
      const isMacOs = /Macintosh/i.test(userAgent);

      if (isAndroid) {
        setOs("Android");
        const androidVersion = userAgent.match(/Android\s+([\d.]+)/i);
        setVersion(androidVersion ? androidVersion[1] : "Không xác định");
        toast.warning(
          `Bạn đang truy cập trang web từ thiết bị ${os} ${version}. Sử dụng Windows sẽ đem lại trải nghiệm tốt nhất`,
          {
            position: "top-center",
            duration: 15000,
            classNames: { title: "text-center" },
          },
        );
      } else if (isIos) {
        setOs("iOS");
        const iosVersion = userAgent.match(/OS\s+(\d+_\d+)/i);
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
      } else if (isWindows) {
        setOs("Windows");
        const windowsVersion = userAgent.match(/Windows\s+NT\s+([\d.]+)/i);
        setVersion(windowsVersion ? windowsVersion[1] : "Không xác định");
      } else if (isMacOs) {
        setOs("MacOS");
        const macOsVersion = userAgent.match(/Mac\s+OS\s+X\s+([\d_]+)/i);
        setVersion(
          macOsVersion ? macOsVersion[1].replace(/_/g, ".") : "Không xác định",
        );
      } else {
        setOs("Không xác định");
        setVersion("Không xác định");
      }
    }
  }, [os, version]);

  return <div className="absolute"></div>;
}
