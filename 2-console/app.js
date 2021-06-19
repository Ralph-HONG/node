console.log('logging....');
console.clear();


console.log('log');
console.info('info');
console.warn('warn');
console.error('error');


console.assert(2 === 2, "같다");

const student = {name: "inpyo", age: 20, company: {name: "AC"}};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 0});

