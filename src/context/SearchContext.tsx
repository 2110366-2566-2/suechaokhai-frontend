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
  minPrice: number|null;
  maxPrice: number|null;

  minFloorSize: number|null;
  maxFloorSize: number|null;

  numBedrooms: number|null;
  numBathrooms: number|null;
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
      minPrice: null,
      maxPrice: null,

      minFloorSize: null,
      maxFloorSize: null,

      numBedrooms: null,
      numBathrooms: null,
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
    minPrice: null,
    maxPrice: null,

    minFloorSize: null,
    maxFloorSize: null,

    numBedrooms: null,
    numBathrooms: null,
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
