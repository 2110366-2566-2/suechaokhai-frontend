export default function ToggleSwitch({
    toggled,
    onToggle
} : {
    toggled: string,
    onToggle: Function
}) {
    return (
        <div 
            className="flex w-[78px] h-[39px] rounded-full border-solid border-black bg-ci-blue m-auto items-center hover:cursor-pointer"
            onClick={() => 
                onToggle()
            }
        >
            <div className="absolute w-[32px] h-[32px] rounded-[50%] bg-ci-light-gray mx-1">

            </div>
        </div>
    )
}