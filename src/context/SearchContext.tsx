"use client";
import {
  useEffect,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import React from "react";

interface SearchContextType {
  searchContent: string;
  setSearchContent: Dispatch<SetStateAction<string>>;
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType>({
  searchContent: "",
  setSearchContent: (): string => "",
  isSearching:false,
  setIsSearching: ():boolean => false,
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchContent, setSearchContent] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  return (
    <SearchContext.Provider
      value={{
        searchContent,
        setSearchContent,
        isSearching,
        setIsSearching
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
