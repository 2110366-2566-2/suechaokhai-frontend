import PropertyData from "../models/PropertyData";
import Image from "next/image";

const PropertyCard = ({project_name,renting,images}:PropertyData) => {
    return ( 
       <div className="w-[250px] h-[300px] rounded-lg m-8 shadow-xl bg-white">
            <div className="w-full h-[70%] relative rounded-t-lg  ">
                <Image src={images[0]} alt='Product Picture' fill={true} className="object-cover rounded-t-lg"></Image>

            </div>
            <div className="w-full h-[20%] p-[10px] text-center  ">{project_name}</div>
       </div>
        
     );
}
 
export default PropertyCard;