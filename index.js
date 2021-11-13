

// SOAL 1
const sortData = (data = [12,9,30,'z','H','b', 'A','M',99,82]) => {
    const alphabet = [];

    const filterNumber = data.filter((d) => {
    if (typeof d === 'number') return true;
    else {
        alphabet.push(d.toUpperCase())
        return false;
    }
    });

    alphabet.sort();
    filterNumber.sort((a, b) => a - b);

    const result = filterNumber.concat(alphabet);

    console.log('LOG RESULT SOAL 1::' ,result);
    return result;
}

// SOAL 2
let patternFound = 0;
const patternMatcher = (data = 'abakadabra', pattern = 'ab') => {
    if (data.length > 100) return 'Too long';

    const getIndex = data.indexOf(pattern);
    if (getIndex >= 0) {
        data = data.slice(getIndex + 1, data.length);
        patternFound += 1;
        return patternMatcher(data, pattern);
    } else {
        console.log('LOG RESULT SOAL 2:', patternFound)
        return patternFound;
    }
    
}


// SOAL 3
const countAlphabet = (data = 'adasdAbaDsdZB') => {
    const mappedData = [];

    data
    .split('')
    .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a < b) return -1;
        return 1;
    })
    .forEach((d) => {
        const findData = mappedData.findIndex((a) => a.key === d);
        if (findData < 0) mappedData.push({
            key: d,
            lengthData: 1
        })
        else {
         mappedData[findData].lengthData = mappedData[findData].lengthData  + 1; 
        }
    });

    const result = mappedData.map(x => `${x.key}: ${x.lengthData}`)

    console.log('LOG RESULT SOAL 3:', result);
    return result;
}

