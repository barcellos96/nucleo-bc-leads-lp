"use client";

import Image from "next/image";
import afterRegister from "../../app/assets/after-register.png";
import afterRegisterMobile from "../../app/assets/after-register-mobile.png";
import { useContext, useEffect, useState } from "react";
import { ComponentsContext } from "@/providers/components";
import { useRouter } from "next/navigation";

export default function AfterRegister() {
  const { push } = useRouter();
  const { showModalTy, setShowModalTy } = useContext(ComponentsContext);
  const [bcCode, setBcCode] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setBcCode(searchParams.get("bc")); // Now, this will not throw a TypeScript error
  }, []);

  return (
    <div
      className={`${
        showModalTy ? "flex" : "hidden"
      } z-50 absolute flex-col gap-8 items-center justify-center min-h-screen w-full bg-black bg-opacity-50`}
    >
      <Image
        alt="Agradecimento pelo registro"
        src={afterRegister.src}
        width={700}
        height={500}
        loading="lazy"
        className="hidden md:block"
      />

      <Image
        alt="Agradecimento pelo registro"
        src={afterRegisterMobile.src}
        width={480}
        height={500}
        loading="lazy"
        className="hidden sg:block md:hidden"
      />

      <Image
        alt="Agradecimento pelo registro"
        src={afterRegisterMobile.src}
        width={350}
        height={500}
        loading="lazy"
        className="sg:hidden"
      />

      <button
        className="text-white font-semibold w-full max-w-[320px] lg:max-w-[500px] py-3 rounded-lg uppercase animate-custom-bounce"
        style={{ backgroundColor: "#194C8D" }}
        onClick={() => {
          push(`https://beneficioscaminhoneiros.com.br/?bc=${bcCode}`);
          setShowModalTy(false);
        }}
      >
        Clique para continuar
      </button>
    </div>
  );
}
