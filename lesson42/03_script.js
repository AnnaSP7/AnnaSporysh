"use strict";

class Employee {
    constructor(name, id, position) {
        this.name = name;
        this.id = id;
        this.position = position;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees
    }

    getHtml() {
        let html = '<table>';
        html += '<tr><th>ID</th><th>Name</th><th>Position</th></tr>';

        for (const employee of this.employees) {
            html += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td></tr>`;
        }
      
        html += '</table>';
        return html;
    }
}

const employees = [
    new Employee(1, 'John Doe', 'Manager'),
    new Employee(2, 'Jane Smith', 'Developer'),
    new Employee(3, 'Mike Johnson', 'Analyst')
];
  
const empTable = new EmpTable(employees);
const htmlCode = empTable.getHtml();
console.log(htmlCode);
