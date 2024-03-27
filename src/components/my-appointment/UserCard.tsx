import Image from 'next/Image';

export default function UserCard({
    role,
    profilePicSrc,
    name,
    tel
} : {
    role: string,
    profilePicSrc: string,
    name: string,
    tel: string
}) {
    return (
        <div className="flex flex-col">
            <div className="font-semibold text-3xl mb-5">
                {role}
            </div>
            <div className="flex flex-row mx-auto w-full">
                <div>
                    <Image 
                        src={profilePicSrc}
                        alt='profile pic'
                        width={150}
                        height={150}
                        objectFit='cover'
                        // layout='responsive'
                    />
                </div>
                <div className='flex flex-col font-medium text-3xl my-auto mx-auto'>
                    <div>
                        {name}
                    </div>
                    <div>
                        {tel}
                    </div>
                </div>
            </div>
        </div>
    )
}