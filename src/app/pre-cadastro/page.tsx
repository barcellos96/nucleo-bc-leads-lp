import FormsPreRegister from "@/components/forms/formsPreRegister";
import logo_mobile from "../assets/logo-mobile.png";
import logo_site from "../assets/logo-site.png";

import ImgSide from "../assets/imagem_lateral.png";
import Image from "next/image";
import AfterRegister from "@/components/afterRegister";

export default function PreCadastro() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-12 px-4">
      <AfterRegister />

      <section className="max-w-[550px]">
        {/* Mobile Logo */}
        <Image
          alt="Logo beneficio caminhoneiro"
          loading="lazy"
          src={logo_mobile.src}
          height={300}
          width={600}
          className="block lg:hidden mb-4"
        />
        {/* Site Logo */}
        <Image
          alt="Logo beneficio caminhoneiro"
          loading="lazy"
          src={logo_site.src}
          height={300}
          width={600}
          className="hidden lg:block"
        />

        <FormsPreRegister />
      </section>

      <img
        alt="Persona Pré Register"
        src={ImgSide.src}
        height={800}
        width={600}
        className="hidden lg:block"
      />
    </div>
  );
}
