const numbers = [1, 2, 3, 4, 5];
const newnumbers = [...numbers,6];
console.log(newnumbers);

const person ={
    name: 'Max'
};

const newPerson = {
    ...person,
    age:33
};

console.log(newPerson);

const filter = (...args)=>{
    return args.filter(el=>el%2===0);
}

const res = filter(1,2,3,4,5);
console.log(res);


[n1,,n2]=numbers;
console.log(n1,n2);


const person1 ={
    name: 'Max'
};


const secondPerson = {
    ...person
};

person.name='Manu';
console.log(secondPerson);

const doublenumarr = numbers.map(n=>n*2);
console.log(doublenumarr);

