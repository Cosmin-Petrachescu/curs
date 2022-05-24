class User {
    id;
    name;
    email;
    age;
    constructor(id, name, email, age) {
        //setam proprietatile
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    mananca(claorii) {
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore) {
        console.log(`Doarme ${ore} pe zi`);
    }
}
export { User }
