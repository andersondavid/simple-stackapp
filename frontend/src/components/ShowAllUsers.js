import React, { useEffect, useState } from 'react'

import { fetchGet } from '../api/fetchCRUD'

export default function ShowAllUsers() {
	const [users, setUsers] = useState()

	useEffect(() => {
		(async () => {
			const response = await fetchGet()
			setUsers(response)
		})()
	}, [])

	return (
		<div>
			<h3>Carregando todos os elementos da tabela</h3>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Idade</th>
					</tr>
				</thead>
				<tbody>
					{users && users.map(user =>
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.age}</td>
						</tr>
					)}
				</tbody>
			</table>
			<button>Recarregar</button>
		</div>
	)
}
