import Image from "next/image";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const OwnerInfo = ({name,tel,mail,imgSrc}:{name:string,tel:string,mail:string,imgSrc:string}) => {
    return ( 
        <div className="flex flex-col bg-white w-[700px] mt-3">
            <div className="text-xl font-bold p-2">Owner</div>
            <div className="flex flex-row   m-[8px] ">
                <div className="h-[120px] w-[120px] relative justify-between items-center m-[8px] ">
                    <Image
                        src={imgSrc}
                        fill={true}
                        alt="Picture of the author"
                        className="rounded-lg"
                    />
                </div>
                <div className="flex-col m-[8px]">
                    <div className="text-xl font-bold">{name}</div>
                    <div className="text-xl flex-row">
                        <LocalPhoneOutlinedIcon className="m-1"></LocalPhoneOutlinedIcon> 
                        {tel}
                       
                    </div>

                    <div className="text-xl">
                        <EmailOutlinedIcon className="m-1"></EmailOutlinedIcon>
                        {mail}</div>
                </div>
            </div>
        </div>
        
    );
}
 
export default OwnerInfo;