import UserCard from "./UserCard";

export default function ChatList({userList}:{userList:string[]}){
    
    return(
        <div className="flex flex-col overflow-auto">
            {userList.map((item:string)=>(
                <UserCard userId={item}/>
            ))}
        </div>
    )
}