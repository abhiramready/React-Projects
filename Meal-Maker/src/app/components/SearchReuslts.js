import { memo, useState } from "react";
import Image from "next/image";
import RecipieModal from "./RecipieModal";
import { searchContent } from "../utils/content";

const MealCard = ({ font, recipe, isDisplayModal, setViewRecipie }) => {
  const { viewRecipie } = searchContent;
  const { strMeal, strMealThumb, strCategory } = recipe;
  const openModal = () => {
    isDisplayModal(true);
    setViewRecipie(recipe);
  };

  return (
    <div className="w-56 flex flex-col drop-shadow-lg row-span-1 col-span-12 md:col-span-4 lg:col-span-3">
      <Image
        width={208}
        height={208}
        alt={strMeal}
        src={strMealThumb}
        className="rounded-t-lg w-full h-auto"
      />
      <div className="flex flex-col rounded-b-lg p-2 text-white bg-orange-500">
        <div className="text-2xl font-medium mb-2">{strMeal}</div>
        <div>{strCategory}</div>
        <button
          onClick={openModal}
          className={`px-2 py-1.5 mt-4 bg-white hover:bg-slate-200 text-orange-500 rounded-md w-fit ${font.className}`}
        >
          {viewRecipie}
        </button>
      </div>
    </div>
  );
};

export default memo(function SearchResults({ mealList, font }) {
  const [viewRecipie, setViewRecipie] = useState({});
  const [displayModal, isDisplayModal] = useState(false);

  return (
    <>
      <div className="my-8 grid grid-cols-12 gap-y-8 md:gap-8">
        {mealList.map((recipe) => {
          const { idMeal } = recipe;
          return (
            <MealCard
              font={font}
              key={idMeal}
              recipe={recipe}
              isDisplayModal={isDisplayModal}
              setViewRecipie={setViewRecipie}
            />
          );
        })}
      </div>
      {displayModal && (
        <RecipieModal
          viewRecipie={viewRecipie}
          isDisplayModal={isDisplayModal}
        />
      )}
    </>
  );
});
