"use client"

import ImageSlider from "@/components/property-description/ImageSlider";
import PropertyData from "@/models/PropertyData";
import getPropertyDetail from "@/services/property/getPropertyDetail";
import { useEffect, useState } from "react";

export default function PropertyPage({params}:{params:{id:string}}){
    const [property,setProperty] = useState<PropertyData>();
    useEffect(()=>{
        async function getProperty(){
            try{
                const property = await getPropertyDetail(params.id);
                setProperty(property)
            } catch(error){
                console.error("Error fetching data:", error);
            }
        }
        getProperty();
    },[])

    return(
        <div className="flex flex-col items-center">
            {property&&<ImageSlider images={property.property_images}/>}
        </div>
    )
}