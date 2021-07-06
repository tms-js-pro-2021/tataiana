import { getAgeInDays} from './getAgeInDays';
//import {getDateNow} from './date';

describe('getAgeInDays', () => {

    it("find my age", () => {
        const birthYear = 1975;
        const birthMonth = 5;
        const birthDay = 10;
        //const year = 2021;
        //const month = 7;
        //const day = 6;
        const result = getAgeInDays(birthYear, birthMonth, birthDay);
        expect(result).toBe(46);       

    })
})