import Image from "next/image";
import { StaticImageData } from "next/image"; //! react icons
import Link from "next/link";

type ButtonProps = {
  Image: string | StaticImageData;
  h1: string;
  p: string;
};
export function ButtonHome(props: ButtonProps) {
  return (
    <Link
      href="#"
      className="flex items-center gap-5 p-5 bg-mascots-primary-600 max-w-64 border rounded-xl transition-all duration-300 hover:bg-mascots-primary-700 cursor-pointer font-sans shadow-custom text-white"
    >
      <div className="p-4 bg-mascots-primary-50 border rounded-full ">
        <Image src={props.Image} alt={props.h1} width={24} height={24} />
      </div>

      <div className="text-left">
        <h1>
          {" "}
          <b> {props.h1} </b>
        </h1>
        <p> {props.p} </p>
      </div>
    </Link>
  );
}
