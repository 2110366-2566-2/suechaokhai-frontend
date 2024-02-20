'use client'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


import { useState } from "react";

const myListingPage = () => {

    const [haveProp,setHave] = useState<boolean>(false);
    
    const handleCreate=()=>{
        console.log(haveProp)
        setHave(!haveProp)
    }
    return ( 
       <>
        {
                haveProp ? (
                    <div className="flex h-full flex-col mx-64 mt-8">
                        <div className="text-4xl font-bold">My Listing</div>

                        <div className="flex">
                            {/* sort stuff here */}
                        </div>

                        <div className="flex">
                            {/* prop cards */}
                        </div>
                        <div className="flex">
                            {/* page slider */}
                        </div>
                        <div className="flex">
                            {/* num prop text here */}
                        </div>
                        <div className="flex absolute">
                            {/* <CreateButton handleCreate={handleCreate}></CreateButton> */}
                            <button className="flex flex-row bg-ci-blue p-4 rounded-md w-1/5 justify-around " onClick={handleCreate}>
                                <AddCircleOutlineIcon className='text-white text-4xl'></AddCircleOutlineIcon>
                                <div className="font-bold text-2xl text-white ">Create Property</div>
                            </button> 
                        </div>
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