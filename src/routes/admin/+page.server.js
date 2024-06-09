import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	let id = cookies.get('userid');
    // console.log("TRIED LOADING SHIT");
	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/member' });
	}
    console.log(db.getUsers(id));
	return {
	    users: db.getUsers(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
        console.log("CREATE HAS BEEN CALLED");
		try {
			db.createUser(cookies.get('userid'), data.get('employeeId'), data.get('firstName'), data.get('lastName'), data.get('email'), data.get('department'));
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
