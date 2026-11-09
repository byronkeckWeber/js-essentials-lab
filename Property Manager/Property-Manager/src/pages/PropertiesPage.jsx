import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function PropertiesPage() {
  const properties = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(normalizedSearchTerm) ||
    property.address.toLowerCase().includes(normalizedSearchTerm)
  );

  return (
    <section>
      <h1>All Properties</h1>
      <label htmlFor="property-filter">Filter properties</label>
      <input
        id="property-filter"
        type="text"
        placeholder="Filter properties..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ display: 'block', margin: '0.5rem 0 1rem', padding: '0.5rem', width: 'min(100%, 24rem)' }}
      />

      {filteredProperties.length > 0 ? (
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id}>
              <Link to={property.id}>
                <img src={property.image} alt={property.title} style={{ maxWidth: '200px' }} />
                <h2>{property.title}</h2>
                <p>{property.address}</p>
                <p>${property.rent} / month</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No properties match “{searchTerm}”. Try another title or address.</p>
      )}
    </section>
  );
}

export default PropertiesPage;

export async function propertiesLoader() {
  const response = await fetch('http://localhost:3000/properties');
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ title: 'Load error', message: 'Unable to load property data.' }),
      { status: 500 }
    );
  }

  return response.json();
}
