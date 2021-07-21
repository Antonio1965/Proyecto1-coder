import { Item } from "./Item";

export const ItemList = ({ displayItems }) => {
  return (
    <div className='item-list'>
      {displayItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};


