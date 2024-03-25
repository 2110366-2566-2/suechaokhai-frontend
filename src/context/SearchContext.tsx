"use client";
import {
  useState,
  useRef,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from "react";
import React from "react";

interface SearchContextType {
  searchContent: MutableRefObject<string>;

  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType>({
  searchContent: {current:""},


  isSearching:false,
  setIsSearching: ():boolean => false,
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchContent = useRef("")

  const [isSearching, setIsSearching] = useState<boolean>(false);
  return (
    <SearchContext.Provider
      value={{
        searchContent,
        isSearching,
        setIsSearching
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
