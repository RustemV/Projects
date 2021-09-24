const options = {
    name: 'test',   //свойства
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {      // метод
        console.log('test message'); 
    }
    
}

/* console.log(options.name);

console.log(options['name']);

delete options.name; */

console.log(options['colors']['border']);

const {border, bg} = options.colors;

console.log(border);
console.log(bg);

let counter = 0;
for (let key in options) {
        counter++;
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение: ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение: ${options[key]}`);
    }
}

console.log(Object.keys(options).length);

options.makeTest();

