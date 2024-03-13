import { useRouter } from "next/navigation";

export function DetailButton() {

    const router = useRouter();

    return (
        <div className="h-[30%]">
            <button 
                className="w-full bg-ci-blue text-white rounded-lg font-medium text-2xl text-center py-3"
                onClick={(e) => {
                    e.stopPropagation();
                    router.push('/my-appointment/[id]/detail')
                }}
            >
                Detail
            </button>
        </div>
    )
}

export function CancelButton({
    status
} : {
    status: string
}) {
    
    const setButtonColor = (value: string) => {
        switch (value) {
            case 'Pending':
                return 'bg-ci-blue'
            default:
                return 'bg-ci-dark-gray'
        }
    }

    const buttonColor = setButtonColor(status)

    return (
        <div className="h-[30%]">
            <button className={`w-full ${buttonColor} text-white rounded-lg font-medium text-2xl text-center py-3`}>
                Cancel
            </button>
        </div>
    )
}