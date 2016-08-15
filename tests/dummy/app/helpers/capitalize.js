import Ember from 'ember'
const {
 Helper: {
   helper
 },
 String: {
   capitalize: _capitalize
 }
} = Ember

export function capitalize([text]) {
  return _capitalize(text)
}

export default helper(capitalize);
