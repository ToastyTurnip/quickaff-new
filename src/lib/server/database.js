// const db = new Map();

// export function getTodos(userid) {
// 	if (!db.get(userid)) {
// 		db.set(userid, [{
// 			id: crypto.randomUUID(),
// 			description: 'Learn SvelteKit',
// 			done: false
// 		}]);
// 	}

// 	return db.get(userid);
// }

// export function createTodo(userid, description) {
// 	const todos = db.get(userid);

// 	todos.push({
// 		id: crypto.randomUUID(),
// 		description,
// 		done: false
// 	});
// }

// export function deleteTodo(userid, todoid) {
// 	const todos = db.get(userid);
// 	const index = todos.findIndex((todo) => todo.id === todoid);

// 	if (index !== -1) {
// 		todos.splice(index, 1);
// 	}
// }
const db = new Map();
import crypto from 'crypto';

export function getUsers(userid) {
    if(!db.get(userid)) {
        db.set(userid, [{
            id: userid,
            employeeId: "2024000001",
            firstName: "John",
            lastName: "Smith",
            email: "JohnSmith@email.com",
            department: "Finance",
        }]);
    }

    return db.get(userid);
}

export function createUser(userid, employeeId, firstName, lastName, email, department) {
	const users = db.get(userid);

	users.push({
		id: employeeId,
        employeeId,
		firstName,
		lastName,
        email,
        department,
	});
}

export function deleteUser(userid, employeeId) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === employeeId);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}