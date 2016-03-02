export function scoreListPosition(params) {
  let value = params[0];
  return value + 1;
}

export default Ember.Helper.helper(scoreListPosition);