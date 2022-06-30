import React from 'react';

const Home = () => {
	return (
		<main className='w-full p-8'>
			<div className='flex flex-wrap flex-row justify-center'>

				<div className='flex-shrink max-w-full px-0 my-2 w-12/12 sm:w-12/12 md:w-6/12 lg:w-3/12 xl:px-6 border lg:border-0 left-siebar'>
					<div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase pb-2 text-center lg:text-left'>ADD YOUR TASK</h2>
					</div>
					<div className="flex">
						<input type="text" placeholder="Type here" className="input input-bordered rounded-none w-full" />
						<button className="btn btn-square btn-outline rounded-none">
							Add
						</button>
					</div>
				</div>

				<div className='flex-shrink max-w-full px-0 my-2 w-12/12 sm:w-12/12 md:w-6/12 lg:w-9/12 xl:px-6 border lg:border-0'>
					<div className="text-xl mb-3 font-semibold">
						<h2 className='uppercase mt-6 lg:mt-0 pb-2 text-center lg:text-left'>YOUR TASK LIST</h2>
					</div>

					{/* <ul className='flex flex-row'>
						<li className='flex gap-2 border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" className="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
						</li>
					</ul> */}

					<ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>
						<li className='flex justify-between items-center border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" className="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
							<button className="btn btn-circle btn-outline">
								<i className="far fa-edit text-lg"></i>
							</button>
						</li>

						<li className='flex justify-between items-center border px-2 py-1 rounded-md'>
							<input type="radio" name="radio-1" className="radio text-xl p-4"/>
							<h2 className='px-2 py-1 text-lg'>Added todo list from thek kshn lks</h2>
							<button className="btn btn-circle btn-outline">
								<i className="far fa-edit text-lg"></i>
							</button>
						</li>

					</ul>
				</div>
				
			</div>
			

		</main>
	);
};

export default Home;