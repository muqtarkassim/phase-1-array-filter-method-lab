// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//console.log(drivers.includes('Sally'))
function  findMatching(array,value){

const tolower=value.toLowerCase();
const FilteredValue=array.filter((item)=>item.toLowerCase()===tolower);
return FilteredValue;}
//console.log(findMatching(drivers,'Boby'))

function   fuzzyMatch(array,value){
 
   const firstTwo=value.substring(0,2);
   const getName=array.filter((item)=>item/*.startsWith(value))*/.substring(0,2)===firstTwo)
return getName;
}
//console.log(fuzzyMatch(drivers,'mm'))
const mydrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function  matchName(array,value){
    const findMatching=array.filter((item)=>item.name===value)
return findMatching;
}
console.log(matchName(mydrivers,'Bobby'))