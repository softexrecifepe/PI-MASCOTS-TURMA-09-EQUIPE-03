import Image from "next/image";
import { StaticImageData } from "next/image"; //! react icons
import Link from "next/link";

type ButtonProps = {
  Image: string | StaticImageData;
  h1: string;
  p: string;
  href: string;
};
export function ButtonHome(props: ButtonProps) {
  return (
    <Link
      href={props.href}
      className="flex items-center gap-5 p-5 bg-mascots-primary-600 max-w-64 border rounded-xl transition-all duration-300 hover:bg-mascots-primary-700 cursor-pointer font-sans shadow-custom text-white active:bg-mascots-primary-500"
    >
      <div className="p-3 flex items-center bg-mascots-primary-50 border rounded-full ">
        <Image src={props.Image} alt={props.h1} width={36} height={36} />
      </div>

      <div className="text-left flex flex-col gap-1">
        <h1>
          <p className="text-xl font-semibold"> {props.h1} </p>
        </h1>
        <p className="font-medium"> {props.p} </p>
      </div>
    </Link>
  );
}
