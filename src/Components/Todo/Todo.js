import React from 'react';

const Todo = () => {
	return (
		<main>
			<div className='w-full p-8'>
					{/* <div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase mt-6 lg:mt-0 pb-2 text-center lg:text-left'>YOUR TASK LIST</h2>
					</div> */}

					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
						<li className='flex justify-between border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" class="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
							<button class="btn btn-circle btn-outline">
								edit
							</button>
						</li>

						<li className='flex justify-between border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" class="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
							<button class="btn btn-circle btn-outline">
								edit
							</button>
						</li>

						<li className='flex justify-between border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" class="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
							<button class="btn btn-circle btn-outline">
								edit
							</button>
						</li>

					</ul>
			</div>
		</main>
	);
};

export default Todo;