import Image from "next/image"
import { StaticImageData } from 'next/image';


type ButtonProps = {
    Image: string | StaticImageData;
    h1: string;
    p: string;

}
export function Button(props:ButtonProps){
    return(
        <div className="flex items-center gap-5 p-5 bg-mascots-primary-500 max-w-64 border rounded-xl transition-all duration-300 hover:bg-mascots-primary-700 flex items-center gap-5 p-5 bg-mascots-primary-500 max-w-64 border rounded-xl transition-all duration-300 hover:bg-mascots-primary-700 cursor-pointer p-4 font-sans shadow-custom">
                <div className="p-4 bg-mascots-primary-50 border rounded-full ">
                <Image src={props.Image} alt={props.h1} width={24} height={24} /> 
                </div>

                <div>
                <h1> <b> {props.h1} </b></h1>
                <p> {props.p} </p>
                </div>
        </div>
    )
}
