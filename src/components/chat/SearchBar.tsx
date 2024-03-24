"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface SearchBarProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchAfterMS: number;
}

export default function SearchBar(props: SearchBarProps) {
  const { setSearchValue, searchAfterMS } = props;

  const [value, setValue] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<number>();

  const search = () => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchTimeout !== undefined) window.clearTimeout(searchTimeout);

    setSearchTimeout(
      window.setTimeout(() => {
        search();
        setSearchTimeout(undefined);
      }, searchAfterMS)
    );
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
      window.clearTimeout(searchTimeout);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="h-12 w-full rounded-xl bg-ci-light-gray px-4 placeholder:text-ci-dark-gray"
        placeholder="Search user"
        onChange={onChangeHandler}
        value={value}
        onKeyDown={onKeyDownHandler}
      ></input>
    </div>
  );
}
