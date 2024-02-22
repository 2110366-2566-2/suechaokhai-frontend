import PropertyData from "../models/PropertyData";
import PropertyCard from "./PropertyCard";
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

const PropertyCards = ({propData}:{propData:PropertyData[]}) => {
    const [page,setPage] = useState<number>(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return ( 
        <>
            <div className="flex my-5 font-semibold text-xl">
                {/* sort stuff here */}
                <div className="">Sort By</div>
            </div>

            <div className="grid grid-cols-2 gap-24 ">
                {propData.slice(10*(page-1),10*page).map((prop:PropertyData)=>(
                    
                    <PropertyCard {...prop}></PropertyCard>
                ))}
            </div>
            
            {
                propData.length>10 ?
                <div className="flex w-full items-center justify-center m-10">
                    <Pagination count={Math.ceil(propData.length/20)} 
                                size="large"
                                onChange={handleChange}></Pagination>
                </div>
                : null
            }
            

            <div className="flex m-10 text-center items-center justify-center text-2xl">
                {/* num prop text here */}
                1 - 10 of 28 properties for rent or sales in my listing
            </div>
        </>
    
    );
}
 
export default PropertyCards;