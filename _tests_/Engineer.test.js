const Engineer = require("../lib/Engineer.js");

describe("Engineer Test", () => {
    test("Testing for name", () => {
        const employee = new Engineer("John", 12, "John@gmail.com","johngithub");
        expect(employee.getName()).toBe("John");
    })
    test("Testing for id", () => {
        const employee = new Employee("John", 12, "John@gmail.com");
        expect(employee.getId()).toBe(12);
    })
    test("Testing for email", () => {
        const employee = new Employee("John", 12, "John@gmail.com");
        expect(employee.getEmail()).toBe("John@gmail.com");
    })
    test("Testing for role", () => {
        const employee = new Employee("John", 12, "John@gmail.com");
        expect(employee.getRole()).toBe("Employee");
    })
})