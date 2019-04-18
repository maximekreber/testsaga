export const mapStateToProps = state => {
  return {
    age: state.ageReducer.age
  };
};

export const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
