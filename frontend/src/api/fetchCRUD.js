const BASE_URL = 'http://localhost:3001'

const fetchGet = async () => {
	return await fetch(BASE_URL + '/users')
		.then(res => res.json())
}

const fetchPost = async (userData) => {
	return await fetch(BASE_URL + '/adduser', {
		method: 'POST',
		body: JSON.stringify(userData),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
}

const fetchUpdate = async (userData) => {
	return await fetch(BASE_URL + '/updateuser/' + userData.id, {
		method: 'PUT',
		body: JSON.stringify(userData),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
}

const fetchDelete = async (id) => {
	return await fetch(BASE_URL + '/deleteuser/' + id, {
		method: 'DELETE'
	})
		.then(res => res.json())
}


export { fetchGet, fetchPost, fetchUpdate, fetchDelete }