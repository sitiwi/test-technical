const initialState = {
  genresData: [],
  movieData: [],
  detailData: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_GENRES":
      return {
        ...state,
        genresData: action.payload,
      };
    case "GET_MOVIE":
      return {
        ...state,
       movieData: action.payload,
      };
      case "GET_DETAIL":
    return {
        ...state,
       detailData: action.payload,
      };
  }
  return state;
};
