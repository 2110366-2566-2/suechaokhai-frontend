import Image from "next/image";

const OwnerInfo = ({name,tel,mail,imgSrc}:{name:string,tel:string,mail:string,imgSrc:string}) => {
    return ( 
        <div className="flex flex-row">
            <div>Owner</div>
            <div>
            <Image
                src={imgSrc}
                width={100}
                height={100}
                alt="Picture of the author"
            />
            </div>
            <div className="flex-col">
                <div>{name}</div>
                <div>{tel}</div>
                <div>{mail}</div>
            </div>


        </div>
    );
}
 
export default OwnerInfo;