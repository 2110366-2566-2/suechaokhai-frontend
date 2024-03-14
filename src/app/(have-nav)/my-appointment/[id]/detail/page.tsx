export default function AppointmentDetail() {
    const propertyImgSrc="/img/my-appointment/mhadaeng.png" 
    const propertyName="Bhan Mha Daeng 3" 
    const propertySubName="Project House of Mha Daeng" 
    const ownerImgSrc="/img/my-appointment/owapapi.png" 
    const ownerName="Owa Papi" 
    const date="1 Apr 2005" 
    const time="13:39" 
    const status="Pending"

    return (
        <div className="w-[80%] h-full mx-auto my-[50px]">
            <div className="font-bold text-4xl">
                {propertyName}
            </div>
            <div className="my-16 bg-ci-light-gray w-full h-[500px] rounded-3xl">
                <div className="flex items-center justify-center w-[90%] h-full mx-auto">
                    <div>
                        {propertyName}
                    </div>
                </div>
            </div>
        </div>
    )
}