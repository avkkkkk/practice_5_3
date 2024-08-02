myWork = [];
for(let i = 1; i <= 10; i++) {
    let x = i % 2;
    let lesson = {
        name: 'Lesson ' + i,
        status: Boolean(x)
    };
    myWork.push(lesson);
}

console.log(myWork);
