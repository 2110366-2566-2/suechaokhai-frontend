import Image from "next/image";

export default function UserCard({userId}:{userId:string}){
    return(
        <div className="flex flex-row w-full h-20 justify-start items-center hover:bg-ci-gray rounded-xl p-2">
            <div className="aspect-square min-h-16 min-w-16 overflow-hidden rounded-full">
                <Image src='/img/arthur.jpg' alt='รูปปก' 
                width={12}
                height={12}
                draggable={false}
                className="min-h-16 min-w-16"/>
            </div>
            <div className="text-xl font-bold px-8">
                {userId}
            </div>
        </div>
    )
}