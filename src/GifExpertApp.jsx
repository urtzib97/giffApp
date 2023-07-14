import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Wimbledon', 'USOpen']);
  
  const onAddCategory = (category) => {

    if( categories.includes(category) ) return;

    setCategories([category, ...categories]);
    //setCategories((cat) => [...cat, 'AUSOpen']);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={ onAddCategory }/>
      { 
        categories.map( (category) => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
      }
    </>
  );
}