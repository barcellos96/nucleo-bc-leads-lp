"use client";

import { ComponentsContext } from "@/providers/components";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Checkout() {
  const { setShowCheckout } = useContext(ComponentsContext);
  const { push } = useRouter();
  const [bcCode, setBcCode] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setBcCode(searchParams.get("bc")); // Now, this will not throw a TypeScript error
  }, []);

  return (
    <div>
      <iframe
        src="https://boleto.bsfonline.com.br/assinatura?preco=59,69&company=nucleo-mundial-de-negocios"
        width="100%"
        height="450"
      />

      <button
        className="mt-8 text-white font-semibold w-full max-w-[320px] lg:max-w-[500px] py-3 rounded-lg uppercase "
        style={{ backgroundColor: "#194C8D" }}
        onClick={() => {
          push(`https://beneficioscaminhoneiros.com.br/?bc=${bcCode}`);
          setShowCheckout(false);
        }}
      >
        Efetuar pagamento depois
      </button>
    </div>
  );
}
