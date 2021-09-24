function logPerson(s, name, age) {
    console.log(name);
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Иван';
const personAge = 30;
const output = logPerson`Имя ${personName}, возраст ${personAge} лет`;  // вывод: "Иван"
console.log(output); // вывод: "Имя Иван, возраст 30 лет"