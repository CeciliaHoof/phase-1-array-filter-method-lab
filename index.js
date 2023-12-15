// Code your solution here
const drivers = [
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

function findMatching(arr, string){
    return arr.filter((name) => {
        if (name.toLowerCase() === string.toLowerCase()){
            return name;
        }
    });
}

function fuzzyMatch(arr, string){
    let letterArr = string.split('');
    return arr.filter((name) => {
        let nameLetters = name.split('');
        for (let i = 0; i < letterArr.length; i++){
            if (nameLetters[i] === letterArr[i]){
                return name
            }
        }
    });
}

function matchName(objArr, string){
    return objArr.filter((obj) => {
        for (const name in obj){
            if (obj[name] === string){
                return obj;
            }
        }
    })
}