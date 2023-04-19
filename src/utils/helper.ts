export const formatDMY = (date: Date) => {
    const newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = (1 + newDate.getMonth()).toString().padStart(2, '0');
    let day = newDate.getDate().toString().padStart(2, '0');
  
    return day + '/' + month + '/' + year;
  };
  
export const stringToDMY = (value: string | undefined) => {
    if (value !== undefined) {
        const splitted = value.split('/');
        return new Date(`${splitted[1]}/${splitted[0]}/${splitted[2]}`);
    }
    return undefined;
};

export const getDayMonthYear = (value: string | undefined) => {
    if (value !== undefined) {
        const splitted = value.split('/');
        return {
            day: splitted[0],
            month: splitted[1],
            year: splitted[2],
        };
    }
    return {
        day: '',
        month: '',
        year: '',
    };
};
  

export const isStringValidNumber = (value: string) => (
    value && !isNaN(value as any)
  );
  
export const isNumberInRange = (number: number, min: number, max: number) => (
    number >= min && number <= max
);

export const dpCount = (number: string | undefined) => {
    if (typeof number === 'undefined') {
        return 0;
    }
    return number.length;
};

export const generateZerosPadding = ({
    numDpCount,
    maxDpCount,
    stringNumBeforeDp,
    stringNumAfterDp,
  }: {
    numDpCount: number,
    maxDpCount: number,
    stringNumBeforeDp: string,
    stringNumAfterDp: string | undefined,
  }) => {
    let newString = '';
    if (numDpCount === 0 && numDpCount === maxDpCount) {
      newString = `${stringNumBeforeDp}`;
    } else if (numDpCount === 0 && numDpCount < maxDpCount) {
      newString = `${stringNumBeforeDp}`;
      for (let i = 1; i <= maxDpCount - numDpCount; i++) {
        newString = newString.concat('0');
      }
    } else if (numDpCount > 0 && numDpCount === maxDpCount) {
      newString = `${stringNumBeforeDp}${stringNumAfterDp}`;
    } else if (numDpCount > 0 && numDpCount < maxDpCount) {
      newString = `${stringNumBeforeDp}${stringNumAfterDp}`;
      for (let i = 1; i <= maxDpCount - numDpCount; i++) {
        newString = newString.concat('0');
      }
    }
    return newString;
  };
  
  export const generateFloatingPtArgs = (one: string, two: string) => {
    const [oneSplit, twoSplit] = [one.split('.'), two.split('.')];
    const [oneAfterDp, twoAfterDp] = [oneSplit[1], twoSplit[1]];
    const [oneDpCount, twoDpCount] = [dpCount(oneAfterDp), dpCount(twoAfterDp)];
    const maxDpCount = Math.max(oneDpCount, twoDpCount);
    let [newOneStr, newTwoStr] = [
      generateZerosPadding({
        numDpCount: oneDpCount,
        maxDpCount,
        stringNumBeforeDp: oneSplit[0],
        stringNumAfterDp: oneAfterDp,
      }),
      generateZerosPadding({
        numDpCount: twoDpCount,
        maxDpCount,
        stringNumBeforeDp: twoSplit[0],
        stringNumAfterDp: twoAfterDp,
      }),
    ];
    const [newOne, newTwo] = [parseFloat(newOneStr), parseFloat(newTwoStr)];
    const addSubtractDivisor = parseFloat(`1e${maxDpCount}`);
    const multDivisor = parseFloat(`1e${maxDpCount * 2}`);
    return { newOne, newTwo, addSubtractDivisor, multDivisor };
  };
  
  export const getEqOrBiggerMultiple = (number: number, multiple: number) => {
    const {
      newOne: newNumber,
      newTwo: newMultiple,
    } = generateFloatingPtArgs(number.toString(), multiple.toString());
    const ceilingInt = Math.ceil(newNumber / newMultiple);
    const {
      newOne: newCeilingInt,
      newTwo: secondMultiple,
      multDivisor,
    } = generateFloatingPtArgs(ceilingInt.toString(), multiple.toString());
    return (newCeilingInt * secondMultiple) / multDivisor;
  };
  
  export const getEqOrSmallerMultiple = (number: number, multiple: number) => {
    const {
      newOne: newNumber,
      newTwo: newMultiple,
    } = generateFloatingPtArgs(number.toString(), multiple.toString());
    const floorInt = Math.floor(newNumber / newMultiple);
    const {
      newOne: newFloorInt,
      newTwo: secondMultiple,
      multDivisor,
    } = generateFloatingPtArgs(floorInt.toString(), multiple.toString());
    return (newFloorInt * secondMultiple) / multDivisor;
  };
  