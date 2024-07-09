import { Item } from '../Item';

export const Listing = ({ items }) => {
	
	return (
        <div className="item-list">
            {items.map(item => <Item key={item.listing_id} item={item} />)}
        </div>
	);
}