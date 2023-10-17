"use client";
import { useState } from "react";
import { Pacifico } from "next/font/google";
import { homeContent } from "./utils/content";
import getSearchData from "./utils/getSearchData";
import SearchResults from "./components/SearchReuslts";

const font = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const [mealList, setMealList] = useState([]);
  const [queryValue, setQueryValue] = useState("");
  const { appName, inputText, searchText } = homeContent;
  const handleOnChange = (e) => setQueryValue(e.target.value);
  const handleOnSearch = async (e) => {
    e.preventDefault();
    const { meals = [] } = await getSearchData(queryValue);
    setMealList(meals);
  };

  return (
    <main className="p-20 min-h-screen flex flex-col items-center">
      <h1
        className={`mb-10 text-orange-500 text-5xl md:text-8xl font-medium  ${font.className}`}
      >
        {appName}
      </h1>
      <form className="flex items-center" onSubmit={handleOnSearch}>
        <input
          type="text"
          placeholder={inputText}
          onChange={handleOnChange}
          className="py-2 px-4 rounded-md border-2 border-gray-300"
        />
        <button
          type="submit"
          className="py-2.5 px-4 ml-3 rounded-md font-medium text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-400"
        >
          {searchText}
        </button>
      </form>
      {mealList?.length > 1 && (
        <SearchResults mealList={mealList} font={font} />
      )}
    </main>
  );
}

