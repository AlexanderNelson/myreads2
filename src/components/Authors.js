import React from 'react';

const Authors = ({authors}) => {
   if(!authors)
     authors = [] 
   return (
     <div className="book-authors {authors.length ? '' : 'empty'}">
       {!authors.length  ? "*Author Unavailable*" : ""}
       <ul>
         {authors.map(name => (
           <li key={name}>{name}</li>
         ))}
       </ul>
     </div>
   )
}
export default Authors;