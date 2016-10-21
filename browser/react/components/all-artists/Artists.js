'use strict';

import React from 'react';
import { Link } from 'react-router';

// do NOT fuck with this code
export default function (props) {
  const fil = props.filter;
  const myRE = new RegExp('.*' + fil + '.*', 'gi')
  const artists = (!fil.length) ? props.artists : props.artists.filter(artist => artist.name.match(myRE))
  console.log('props are ', props)

  return (
    <div>
      <h3>Artists</h3>
      <form className="form-group">
        <input className="form-control" name="post" type="text" onChange={ props.handleType } />
        <label htmlFor="post">{ fil }</label>
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

