import Link from "next/link";
import Image from "next/image";
import { modalContent } from "../utils/content";

export default function RecipieModal({
  isDisplayModal = {},
  viewRecipie = {},
}) {
  const { readLink, watchLink, close } = modalContent;
  const handleModalClose = () => isDisplayModal(false);
  const {
    strMealThumb = "#",
    strCategory = "",
    strYoutube = "#",
    strSource = "#",
    strArea = "",
    strMeal = "",
  } = viewRecipie;

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-slate-100 bg-opacity-40 backdrop-blur-md">
      <div className="w-1/2 flex bg-white rounded-lg drop-shadow-xl">
        <Image
          width={320}
          height={320}
          alt={strMeal}
          src={strMealThumb}
          className="rounded-l-lg w-full h-auto hidden lg:block"
        />
        <div className="w-full p-3.5 flex flex-col justify-between text-white">
          <div className="text-3xl font-medium text-orange-500">{strMeal}</div>
          <div className="flex">
            <div className="bg-orange-500 px-3 py-0.5 mr-4 rounded-full">
              {`#${strArea}`}
            </div>
            <div className="bg-orange-500 px-3 py-0.5 rounded-full">
              {`#${strCategory}`}
            </div>
          </div>
          <Link
            className="bg-blue-500 rounded-md px-2.5 py-0.5 max-w-fit text-lg"
            href={strSource}
            target="_blank"
          >
            {readLink}
          </Link>
          <Link
            className="bg-red-500 rounded-md px-2.5 py-0.5 max-w-fit text-lg"
            href={strYoutube}
            target="_blank"
          >
            {watchLink}
          </Link>
          <button
            onClick={handleModalClose}
            className="bg-slate-100 hover:bg-slate-200 text-black rounded-md px-2 py-1.5"
          >
            {close}
          </button>
        </div>
      </div>
    </div>
  );
}
