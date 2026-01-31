"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // smooth UX
    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <Loader /> : null;
}
