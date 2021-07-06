//import { getDateNow } from './date';

const getDateNow = new Date();
export function getAgeInDays(birthYear, birthMonth, birthDay) {
   
   const year = getDateNow.getFullYear();
   const month = getDateNow.getMonth();
   const day = getDateNow.getDate();
   let age = year - birthYear;
   if ( month < (birthMonth - 1))
   {
       age --;
   }
   if (((birthMonth - 1) == month) && (day < birthDay))
   {
       age --;
   }
   return age;    
}
//getAgeInDays()
console.log(getAgeInDays(1988, 8, 10))