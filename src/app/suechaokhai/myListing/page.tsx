'use client'
import PropertyData from '@/components/models/PropertyData';
import PropertyCard from '@/components/mylisting/PropertyCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


import { useState } from "react";

const myListingPage = () => {

    function generatePropertyDataArray(n: number): PropertyData[] {
        const propertyDataArray: PropertyData[] = [];
      
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
              price_per_month: Math.floor(Math.random() * 10000) // Example random price
            }
          };
      
          propertyDataArray.push(propertyData);
        }
      
        return propertyDataArray;
      }
      
      // Example usage:
    const mockFetchedData = generatePropertyDataArray(10);


    const [haveProp,setHave] = useState<boolean>(true);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
                haveProp ? (
                    <div className="flex h-full flex-col mx-64 mt-8 ">
                        <div className="text-4xl font-bold">My Listing</div>

                        <div className="flex my-5 font-semibold text-sm">
                            {/* sort stuff here */}
                            <div className="">Sort By</div>
                        </div>

                        <div className="flex flex-col">
                            {mockFetchedData.map((prop:PropertyData)=>(
                                <PropertyCard {...prop}></PropertyCard>
                            ))}
                        </div>
                        <div className="flex">
                            {/* page slider */}
                        </div>
                        <div className="flex">
                            {/* num prop text here */}
                        </div>
                        <button className="flex flex-row fixed bottom-32 right-24 bg-ci-blue p-4 rounded-md w-1/5 justify-around " onClick={handleCreate}>
                            <AddCircleOutlineIcon className='text-white text-4xl'></AddCircleOutlineIcon>
                            <div className="font-bold text-2xl text-white ">Create Property</div>
                        </button>
                   
                         
                        
                    </div>
                    

                ):
                (
                    <div className="flex h-1/2 flex-col mx-64 mt-8 justify-around items-center">
                        <div className="text-4xl font-bold text-center">Empty property listing</div>

                        <HomeOutlinedIcon className='text-9xl m-5'></HomeOutlinedIcon>

                        <div className="">
                            <div className="text-2xl text-center m-1">Your listing is empty.</div>
                            <div className="text-2xl text-center m-1">Let's create a property on your listing.</div>
                        </div>
                        

                
                        <button className="flex flex-row bg-ci-blue p-4 rounded-md w-1/5 justify-around" onClick={handleCreate}>
                            <AddCircleOutlineIcon className='text-white text-4xl'></AddCircleOutlineIcon>
                            <div className="font-bold text-2xl text-white ">Create Property</div>
                        </button> 
                     
                        
                    </div>
                    

                )
            }
       </>
           
            
    );
}
 
export default myListingPage;