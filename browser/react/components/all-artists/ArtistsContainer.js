'use strict';

import { connect } from 'react-redux';
import ArtistsDecorator from './ArtistsDecorator';

const mapStateToProps = function (state) {
  return {
    artists: state.artists
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ArtistsContainer = statefulComponentCreator(ArtistsDecorator);
export default ArtistsContainer;
