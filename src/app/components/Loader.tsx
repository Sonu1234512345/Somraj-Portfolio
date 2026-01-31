"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
  <div className="loader_image">
      <Image
        src={getImgPath("/images/home/banner/loader.png")}
        alt="Loading..."
        width={100}
        height={100}
      />
  </div>
</div>
  );
}
