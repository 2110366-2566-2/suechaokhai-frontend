'use client'
import PropertyData from '@/components/models/PropertyData';
import PropertyCard from '@/components/mylisting/PropertyCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Pagination from '@mui/material/Pagination';
import Image from 'next/image';

import { useEffect, useState } from "react";

const myListingPage = () => {
    const [propData,setData] = useState<PropertyData[]>([]);

    function generatePropertyDataArray(n: number): PropertyData[] {
        const propertyDataArray:PropertyData[]=[]
        for (let i = 0; i < n; i++) {
          const propertyData: PropertyData = {
            owner_id: `owner_${i}`,
            description: `Description ${i}`,
            images: ["/img/Property.png"],
            project_name: `Project ${i}`,
            address: `Address ${i}`,
            alley: `Alley ${i}`,
            street: `Street ${i}`,
            district: `District ${i}`,
            sub_district: `Sub District ${i}`,
            province: `Province ${i}`,
            postal_code: `Postal Code ${i}`,
            residental_type: `Residential Type ${i}`,
            renting: {
              price_per_month: Math.floor(Math.random() * 100000) // Example random price
            }
          };
      
          propertyDataArray.push(propertyData);
        }
      
        return propertyDataArray;
    }

    useEffect(()=>{
        
        setData(generatePropertyDataArray(30))
    },[])




    const [haveProp,setHave] = useState<boolean>(true);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
                haveProp ? (
                    <div className="flex h-full flex-col mx-72 mt-8 ">
                        <div className="text-4xl font-bold">My Listing</div>

                        <div className="flex my-5 font-semibold text-xl">
                            {/* sort stuff here */}
                            <div className="">Sort By</div>
                        </div>

                        <div className="grid grid-cols-2 gap-24 ">
                            {propData.map((prop:PropertyData)=>(
                                <PropertyCard {...prop}></PropertyCard>
                            ))}
                        </div>
                        
                        {
                            propData.length>10 ?
                            <div className="flex w-full items-center justify-center m-10">
                                <Pagination count={Math.round(propData.length/10)+1}></Pagination>
                            </div>
                            : null
                        }
                        

                        <div className="flex m-10 text-center items-center justify-center text-2xl">
                            {/* num prop text here */}
                            1 - 10 of 28 properties for rent or sales in my listing
                        </div>

                        <button className="flex flex-row fixed bottom-32 right-24 bg-ci-blue p-4 rounded-md w-1/6 justify-around " onClick={handleCreate}>
                            <Image
                                src="/img/mylisting/plusCircle.svg"
                                alt="add"
                                width={30}
                                height={30}
                            />
                            <div className="font-bold text-2xl text-white ">Create Property</div>
                        </button>
                    </div>
                    

                ):
                (
                    <div className="flex h-1/2 flex-col mx-72 mt-8 justify-around items-center">
                        <div className="text-4xl font-bold text-center">Empty property listing</div>

                        <Image
                            src="/img/mylisting/home.svg"
                            alt="home"
                            width={100}
                            height={100}
                        />
                        <div className="">
                            <div className="text-2xl text-center m-1">Your listing is empty.</div>
                            <div className="text-2xl text-center m-1">Let's create a property on your listing.</div>
                        </div>
                    
                        <button className="flex flex-row bg-ci-blue p-4 rounded-md w-1/5 justify-around" onClick={handleCreate}>
                            <Image
                                src="/img/mylisting/plusCircle.svg"
                                alt="add"
                                width={30}
                                height={30}
                            />
                            <div className="font-bold text-2xl text-white ">Create Property</div>
                        </button> 
                     
                        
                    </div>
                    

                )
            }
       </>
           
            
    );
}
 
export default myListingPage;