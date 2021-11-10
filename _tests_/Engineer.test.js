const Engineer = require("../lib/Engineer.js");

describe("Engineer Test", () => {
    test("Testing for name", () => {
        const engineer = new Engineer("John", 12, "John@gmail.com", "johngithub");
        expect(engineer.getName()).toBe("John");
    })
    test("Testing for id", () => {
        const engineer = new Engineer("John", 12, "John@gmail.com", "johngithub");
        expect(engineer.getId()).toBe(12);
    })
    test("Testing for email", () => {
        const engineer = new Engineer("John", 12, "John@gmail.com", "johngithub");
        expect(engineer.getEmail()).toBe("John@gmail.com");
    })
    test("Testing for github", () => {
        const engineer = new Engineer("John", 12, "John@gmail.com", "johngithub");
        expect(engineer.getGithub()).toBe("johngithub");
    })
    test("Testing for role", () => {
        const engineer = new Engineer("John", 12, "John@gmail.com", "johngithub");
        expect(engineer.getRole()).toBe("Engineer");
    })
})