import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
	<header className='lg:px-8 border-b'>
		<div class="navbar bg-base-100">
			<div class="flex-1"> <Link to="/" class="btn btn-ghost normal-case text-xl">To-Do</Link> </div>
			<div class="flex-none">
				<ul class="menu menu-horizontal p-0">
					<li><Link to="/completed">Complete Task</Link></li>
					<li><Link to="/todo">To-Do</Link></li>
					<li><Link to="/calendar">Calendar</Link></li>
				</ul>
			</div>
		</div>
	</header>
	);
};

export default Menu;