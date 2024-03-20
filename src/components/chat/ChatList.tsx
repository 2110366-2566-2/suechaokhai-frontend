import UserCard from "./UserCard";

export default function ChatList({
  userList,
  setChat,
  setChatWith,
}: {
  userList: string[];
  setChat: Function;
  setChatWith: Function;
}) {
  return (
    <div className="flex flex-col overflow-auto">
      {userList.map((item: string) => (
        <UserCard userId={item} setChat={setChat} setChatWith={setChatWith} />
      ))}
    </div>
  );
}
