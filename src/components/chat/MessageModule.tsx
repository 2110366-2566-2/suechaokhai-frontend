import ChatBox from "./ChatBox"
import ChatIcon from "./ChatIcon"

export default function MessageBox(){
    return (
        <div className="flex right-0 bottom-0 fixed">
            <div className="flex flex-row justify-end items-end gap-x-6">
                <div className="p-4" >
                    <ChatIcon/>
                </div>
            </div>
        </div>)
}