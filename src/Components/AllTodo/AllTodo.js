import React, { useContext } from 'react';
import { todoContext } from '../../App';

const AllTodo = () => {
	const {todos, isLoad, setIsLoad} = useContext(todoContext);

	const handleComplete = (id) => {
		// Get Selected Item
		const completeItem = todos.find(item=>item._id == id)
		// console.log({...completeItem});
		const complete = {...completeItem};
		console.log({...complete});
	
		const url = 'http://localhost:5000/complete';
		fetch(url, {
			method: 'POST',
			headers: {'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify({...complete}),
		})
		.then((response) => response.json())
		.then(data => {console.log(data);setIsLoad(true)});
	};

	if (isLoad) {
		return <p className='text-center text-lg text-green-700 font-semibold uppercase'>Loading</p>
	}
	return (
		<>
		{
			todos.map(item=>
				<li key={item._id} className='flex justify-between items-center border px-2 py-1 rounded-md'>
					<input type="radio" name="radio-1" onClick={()=>handleComplete(item._id)} className="radio text-xl p-4 border-red-700"/>
					<h2 className='px-2 py-1 text-lg'>{item.todo}</h2>
					<button className="btn btn-circle btn-outline border-green-700">
						<i className="far fa-edit text-lg text-green-700"></i>
					</button>
				</li>
			)
		}
		</>
	);
};

export default AllTodo;