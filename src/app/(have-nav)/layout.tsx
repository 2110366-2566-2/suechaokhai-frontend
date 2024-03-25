import ChatModule from "@/components/chat/ChatModule";
import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";

import { SearchContextProvider } from "@/context/SearchContext";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PropertyNavigationBar />
      <div>
        <div className="">
          <SearchContextProvider>{children}</SearchContextProvider>
        </div>
      </div>
      <ChatModule />
    </div>
  );
}