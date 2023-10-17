export default function getSearchData(searchValue) {
  const query = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  const result = fetch(query)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return result;
}
