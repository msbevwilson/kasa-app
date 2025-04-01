import { properties } from '../utility/data';
//import { getImageUrl } from './utils.js';

export default function PropertyList() {
  const listItems = properties.map(property =>
    <li key={property.id}>
      <img
        src={property.cover}
        alt={property.title}
      />
      <p>
        <b>{property.title}</b>
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}