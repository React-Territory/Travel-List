import { initialItems } from "../data/data";
import Items from "./Items";

function PackingList() {
  return (
    <div>
      <ul className="px-8 py-2 flex">
        {initialItems.map((item) => (
          <Items item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
