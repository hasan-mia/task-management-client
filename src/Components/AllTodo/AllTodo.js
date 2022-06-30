import React, { useContext } from 'react';
import { todoContext } from '../../App';

const AllTodo = () => {
	const {todos, isLoad} = useContext(todoContext);
	if (isLoad) {
		return <p>Loading</p>
	}
	return (
		<>
		{
			todos.map(item=>
				<li key={item._id} className='flex justify-between items-center border px-2 py-1 rounded-md'>
					<input type="radio" name="radio-1" className="radio text-xl p-4"/>
					<h2 className='px-2 py-1 text-lg'>{item.todo}</h2>
					<button className="btn btn-circle btn-outline">
						<i className="far fa-edit text-lg"></i>
					</button>
				</li>
			)
		}
		</>
	);
};

export default AllTodo;