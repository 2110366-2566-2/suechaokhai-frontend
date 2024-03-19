import Image from "next/image";

export default function UserCard({userId}:{userId:string}){
    return(
        <div className="flex flex-row w-full h-20 justify-start items-center hover:bg-ci-gray rounded-xl p-2">
            <div className="h-16 w-16 overflow-hidden rounded-full justify-center items-center flex">
                <Image src='/img/babywinsmoking.jpg' alt='รูปปก' 
                width={16}
                height={16}
                draggable={false}
                layout="responsive"/>
            </div>
            <div className="text-xl font-bold px-8">
                {userId}
            </div>
        </div>
    )
}