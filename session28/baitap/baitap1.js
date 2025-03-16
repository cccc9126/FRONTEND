const person = {
    name: "John Doe",
    age: 25,
    job: "Development",
};
for (let key in person) {
    console.log(`${key}:${person[key]}`);
    
}