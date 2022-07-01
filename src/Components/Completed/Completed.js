import React, { useContext } from 'react';
import { todoContext } from '../../App';

const Completed = () => {
	const {completes, setCompletes, isLoad, setIsLoad} = useContext(todoContext);

	const handleDelete = id =>{
		const url = `http://localhost:5000/complete/${id}`;
		fetch(url, {
			method: 'DELETE',
			headers: {'content-type': 'application/json'}
		})
		.then(res => res.json())
		.then(data =>{
			if(data.deletedCount > 0){
				const remaining = completes.filter(complete => complete._id !== id);
                setCompletes(remaining);
				setIsLoad(true);
			}
		})
	}
	// if (isLoad) {
	// 	return <p className='text-center text-lg text-green-700 font-semibold uppercase'>Loading</p>
	// }
	return (
		<main className='w-full px-14 py-8'>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
				{
					completes.map(item=>
						<li key={item._id} className='flex justify-between items-center border px-2 py-1 rounded-md'>
							<button className="btn btn-circle btn-outline border-yellow-500">
								<i className="fal fa-times fa-2x text-yellow-500"></i>
							</button>

							<h2 className='px-2 py-1 text-lg'>{item.todo}</h2>
							<button onClick={()=>handleDelete(item._id)} className="btn btn-circle btn-outline border-red-600">
								<i className="far fa-trash-alt text-lg text-red-600"></i>
							</button>
						</li>
					)
				}
				
			</ul>
		</main>
	);
};

export default Completed;