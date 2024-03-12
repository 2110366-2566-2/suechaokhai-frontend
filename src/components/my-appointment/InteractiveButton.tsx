export function DetailButton() {
    return (
        <div className="h-[30%]">
            <button className="w-full bg-ci-blue text-white rounded-lg font-medium text-2xl text-center py-3">
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