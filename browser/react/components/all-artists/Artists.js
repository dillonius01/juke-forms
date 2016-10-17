'use strict';

import React from 'react';
import { Link } from 'react-router';


export default function (props) {
  const artists = props.artists;
  console.log('props are ', props)
  return (
    <div>
      <h3>Artists</h3>
      <form className="form-group">
        <input className="form-control" name="post" type="text" onChange={ props.handleType } />
        <label htmlFor="post">{ props.filter }</label>
      </form>
      <div className="list-group">
        {
          artists && artists
          .map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

// put ternary on line 19?