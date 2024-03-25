"use client";
"use client";
import PropertyData from "../../models/PropertyData";
import PropertyCard from "./PropertyCard";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect, useReducer } from "react";

const PropertyCards = ({
  propData,
  totalProp,
  isEditable,
  additionaltext,
  showAmount,
}: {
  propData: PropertyData[];
  totalProp: number;
  isEditable: boolean;
  additionaltext: string;
  showAmount: boolean;
}) => {
  const sortType = {
    date: "Newest Listing First",
    asc: "Price from lowest to highest",
    desc: "Price from highest to lowest",
  };

  const [page, setPage] = useState<number>(1);
  const [text, setText] = useState<string>("Newest Listing First");
  const [changingSort, setChangingSort] = useState<boolean>(false);

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
      {showAmount ? (
        <div className="text-xl ">
          {10 * (page - 1)+1} - {totalProp < 10 * page ? totalProp : 10 * page} of{" "}
          {totalProp} properties {additionaltext}
        </div>
      ) : null}

      <div className="my-5 flex flex-row">
        {/* sort stuff here */}
        <div className="text-xl font-semibold">Sort By</div>
        <div className="text-xl">
          <div
            className="mx-3 font-semibold text-ci-blue"
            onClick={() => setChangingSort(!changingSort)}
          >
            {text}
          </div>
          {changingSort ? (
            <div className="absolute z-40 mt-2 flex flex-col items-center">
              <div className="flex flex-col justify-around rounded-2xl bg-white p-1">
                <div
                  className="h-full w-full p-2 font-normal text-black hover:bg-[#ECECEC]"
                  onClick={() => {
                    setText("Newest Listing First");
                    setChangingSort(!changingSort);
                  }}
                >
                  Newest Listing First
                </div>
                <div
                  className="h-full w-full p-2 font-normal text-black hover:bg-[#ECECEC]"
                  onClick={() => {
                    setText("Price from lowest to highest");
                    setChangingSort(!changingSort);
                  }}
                >
                  Price from lowest to highest
                </div>
                <div
                  className="h-full w-full p-2 font-normal text-black hover:bg-[#ECECEC]"
                  onClick={() => {
                    setText("Price from highest to lowest");
                    setChangingSort(!changingSort);
                  }}
                >
                  Price from highest to lowest
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 gap-24">
        {propData
          .slice(10 * (page - 1), 10 * page)
          .map((prop: PropertyData) => (
            <PropertyCard
              propData={prop}
              editable={isEditable}
              imgSrc="/img/Property.png"
            ></PropertyCard>
          ))}
      </div>

      {totalProp > 10 ? (
        <div className="flex w-full items-center justify-center p-10">
          <Pagination
            count={Math.ceil(totalProp / 10)}
            size="large"
            onChange={handleChange}
            color="primary"
          ></Pagination>
        </div>
      ) : null}
      <div className="flex h-[100px] items-center justify-center pb-24 pt-16 text-2xl">
        {/* num prop text here */}
        <div>
          {10 * (page - 1)+1} - {totalProp < 10 * page ? totalProp : 10 * page} of{" "}
          {totalProp} properties {additionaltext}
        </div>
      </div>
    </>
  );
};

export default PropertyCards;
