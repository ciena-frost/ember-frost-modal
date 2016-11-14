import Ember from 'ember';

export function ifUndefined([condition, whenUndef, whenNotUndef, ...rest]) {
  return condition === undefined ? whenUndef : whenNotUndef
}

export default Ember.Helper.helper(ifUndefined);
