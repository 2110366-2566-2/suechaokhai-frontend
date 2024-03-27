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
            <div className="font-semibold text-3xl">
                {role}
            </div>
            <div className="flex flex-row mx-auto">
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
                <div className='flex flex-col font-regular text-2xl my-auto'>
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