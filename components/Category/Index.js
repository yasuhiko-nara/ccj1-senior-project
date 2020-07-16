import { categoryMap } from "../GoogleMap/mapUtils/pref";
import MapCategory from "./MapCategory";

export default function index() {
  const result = categoryMap.map((obj) => (
    <MapCategory feeld={obj.feeld} category={obj.category} />
  ));

  return <>{result}</>;
}
