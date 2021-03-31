import React from 'react';
import ReactDOM from 'react-dom';

function Hi()
{
 return <div className="hello"> 
     <ul>
         <li>
             This is unordered List
         </li>
     </ul>
     <strong>Fraz Naveed</strong>
      </div>
} ReactDOM.render(<Hi/>, document.querySelector('#root'));