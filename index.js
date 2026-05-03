


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require('datejs');

const combinedObject = []

function combineUsers(...args) {
 const combinedObject = {
  users: [],
  merge_date: '5/3/2026'
 }
 
args.forEach(array => {
  combinedObject.users = [...combinedObject.users, ...array]
})
combinedObject.merge_date = new Date().toString('5/3/2026');

return combinedObject;
}
