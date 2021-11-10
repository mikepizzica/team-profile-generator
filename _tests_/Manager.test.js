const Manager = require("../lib/Manager.js");

describe("Manager Test", () => {
    test("Testing for name", () => {
        const manager = new Manager("John", 12, "John@gmail.com", 23);
        expect(manager.getName()).toBe("John");
    })
    test("Testing for id", () => {
        const manager = new Manager("John", 12, "John@gmail.com", 23);
        expect(manager.getId()).toBe(12);
    })
    test("Testing for email", () => {
        const manager = new Manager("John", 12, "John@gmail.com", 23);
        expect(manager.getEmail()).toBe("John@gmail.com");
    })
    test("Testing for school", () => {
        const manager = new Manager("John", 12, "John@gmail.com", 23);
        expect(manager.getOfficeNumber()).toBe(23);
    })
    test("Testing for role", () => {
        const manager = new Manager("John", 12, "John@gmail.com", 23);
        expect(manager.getRole()).toBe("Manager");
    })
})