import React from 'react';
import { Link } from 'react-router-dom';

export const WrappedLink = (linkPath) => {
  
    return (
        <button>
            <Link 
                style={ {display: 'block', height: '100%'} } 
                to={`/${linkPath}`} 
            />
        </button>
    )
}
