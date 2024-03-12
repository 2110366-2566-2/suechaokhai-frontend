"use client";
import PropertyData from "../models/PropertyData";
import PropertyCard from "./PropertyCard";
import Pagination from '@mui/material/Pagination';
import { useState,useEffect,useReducer} from "react";



const PropertyCards = ({propData}:{propData:PropertyData[]}) => {

    const sortType= {
        'date': "Newest Listing First" ,
        'asc' : "Price from lowest to highest",
        'desc': "Price from highest to lowest"
    }

    const [page,setPage] = useState<number>(1);
    const [text,setText] = useState<string>("Newest Listing First");
    const [changingSort,setChangingSort] =useState<boolean>(false);

    // const reducer = (state:PropertyData[],action:string)=>{
    //     switch (action) {
    //         case 'SORT_BY_NAME':
    //           return {
    //             ...state,
    //             products: state.products.slice().sort((a, b) => a.name.localeCompare(b.name)),
    //           };
    //         case 'SORT_BY_PRICE':
    //           return {
    //             ...state,
    //             products: state.products.slice().sort((a, b) => a.price - b.price),
    //           };
    //         default:
    //           return state;
    //     }
    // }

    // const [sortedProp,dispatch] = useReducer(reducer,propData)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page]);

    return ( 
        <>
            <div className="flex flex-row my-5">
                {/* sort stuff here */}
                <div className="font-semibold text-xl">Sort By</div>
                <div className="text-xl">
                    <div className="mx-3 text-ci-blue font-semibold"
                        onClick={()=>setChangingSort(!changingSort)}
                    >{text}</div>
                    {
                        changingSort ? 
                        <div className="absolute z-40 flex flex-col items-center mt-2">
                            <div className="flex flex-col rounded-2xl bg-white justify-around p-1">
                                <div className="p-2 text-black font-normal w-full h-full hover:bg-[#ECECEC]"
                                    onClick={()=>setText("Newest Listing First")}>Newest Listing First</div>
                                <div className="p-2 text-black font-normal w-full h-full hover:bg-[#ECECEC]"
                                    onClick={()=>setText("Price from lowest to highest")}>Price from lowest to highest</div>
                                <div className="p-2 text-black font-normal w-full h-full hover:bg-[#ECECEC]"
                                    onClick={()=>setText("Price from highest to lowest")}>Price from highest to lowest</div>
                            </div>
                        </div>
                        :null
                    }
                    
                
                </div>  
            </div>

            <div className="grid grid-cols-2 gap-24 ">
                {propData.slice(10*(page-1),10*page).map((prop:PropertyData)=>(                 
                    <PropertyCard propData={prop} editable={true} ></PropertyCard>
                ))}
            </div>
            
            {
                propData.length>10 ?
                <div className="flex w-full items-center justify-center p-10">
                    <Pagination count={Math.ceil(propData.length/10)} 
                                size="large"
                                onChange={handleChange}
                               color="primary" ></Pagination>
                </div>
                : null
            }
            

            <div className="flex h-[100px] pt-16 pb-24 items-center justify-center text-2xl">
                {/* num prop text here */}
                <div>
                    {10*(page-1)} - {propData.length<10*page ? propData.length : 10*page } of {propData.length} properties for rent or sales in my listing
                </div>
            </div>
        </>
    
    );
}
 
export default PropertyCards;
