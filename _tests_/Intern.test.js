const Intern = require("../lib/Intern.js");

describe("Intern Test", () => {
    test("Testing for name", () => {
        const intern = new Intern("John", 12, "John@gmail.com", "temple");
        expect(intern.getName()).toBe("John");
    })
    test("Testing for id", () => {
        const intern = new Intern("John", 12, "John@gmail.com", "temple");
        expect(intern.getId()).toBe(12);
    })
    test("Testing for email", () => {
        const intern = new Intern("John", 12, "John@gmail.com", "temple");
        expect(intern.getEmail()).toBe("John@gmail.com");
    })
    test("Testing for school", () => {
        const intern = new Intern("John", 12, "John@gmail.com", "temple");
        expect(intern.getSchool()).toBe("temple");
    })
    test("Testing for role", () => {
        const intern = new Intern("John", 12, "John@gmail.com", "temple");
        expect(intern.getRole()).toBe("Intern");
    })
})