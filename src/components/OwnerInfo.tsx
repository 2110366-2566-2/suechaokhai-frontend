import Image from "next/image";

const OwnerInfo = ({name,tel,mail,imgSrc}:{name:string,tel:string,mail:string,imgSrc:string}) => {
    return ( 
        <div className="flex flex-col bg-white w-[792px]">
            <div className="text-3xl">Owner</div>
            <div className="flex flex-row">
                <div className="h-[120px] w-[120px] relative m-3 justify-between items-center">
                    <Image
                        src={imgSrc}
                        fill={true}
                        alt="Picture of the author"
                        // className=""
                    />
                </div>
                <div className="flex-col">
                    <div className="text-xl">{name}</div>
                    <div>{tel}</div>
                    <div>{mail}</div>
                </div>
            </div>
        </div>
        
    );
}
 
export default OwnerInfo;