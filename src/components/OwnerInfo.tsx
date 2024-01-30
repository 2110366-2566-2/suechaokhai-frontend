import Image from "next/image";

const OwnerInfo = ({name,tel,mail,imgSrc}:{name:string,tel:string,mail:string,imgSrc:string}) => {
    return ( 
        <div className="flex flex-col bg-white w-[792px]">
            <div className="text-[28px]">Owner</div>
            <div className="flex flex-row  p-[8px] m-[8px] ">
                <div className="h-[120px] w-[120px] relative justify-between items-center m-[8px] ">
                    <Image
                        src={imgSrc}
                        fill={true}
                        alt="Picture of the author"
                        className="rounded-lg"
                    />
                </div>
                <div className="flex-col m-[8px]">
                    <div className="text-xl">{name}</div>
                    <div>{tel}</div>
                    <div>{mail}</div>
                </div>
            </div>
        </div>
        
    );
}
 
export default OwnerInfo;