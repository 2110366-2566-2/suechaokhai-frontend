"use client";
import {
  useState,
  useRef,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import React from "react";

interface SearchFilters {
  minPrice: number;
  maxPrice: number;

  minFloorSize: number;
  maxFloorSize: number;

  numBedrooms: number;
  numBathrooms: number;
}

interface SearchContextType {
  searchContent: MutableRefObject<string>;

  searchFilters: MutableRefObject<SearchFilters>;

  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType>({
  searchContent: { current: "" },

  searchFilters: {
    current: {
      minPrice: 0,
      maxPrice: 0,

      minFloorSize: 0,
      maxFloorSize: 0,

      numBedrooms: 0,
      numBathrooms: 0,
    } as SearchFilters,
  },

  isSearching: false,
  setIsSearching: (): boolean => false,
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchContent = useRef<string>("");
  const filters: SearchFilters = {
    minPrice: 0,
    maxPrice: 0,

    minFloorSize: 0,
    maxFloorSize: 0,

    numBedrooms: 0,
    numBathrooms: 0,
  };
  const searchFilters = useRef<SearchFilters>(filters);

  const [isSearching, setIsSearching] = useState<boolean>(false);
  return (
    <SearchContext.Provider
      value={{
        searchContent,
        searchFilters,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
