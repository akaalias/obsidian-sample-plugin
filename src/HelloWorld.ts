export default class HelloWorld {
    greet(name: string) {
        if(name.trim() === "") {
            return "Hello World!";
        }
        return `Hello World, ${name}!`;
    }
}