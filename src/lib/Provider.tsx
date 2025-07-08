"use client";
import AOS from "aos";
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return <>{children}</>;
};

export default Providers;
