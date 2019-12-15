// Libraries
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Icons
import Icon from '../../../icons/Icon';
import { ICONS } from '../../../icons/iconConstants';

// Components
import DeleteModal from './PersonalInfo/subs/DeleteModal';

// Hooks
import useModal from '../../../utils/useModal';

export default function LeftNavBar({ setLoggedin }) {
	let { pathname } = useLocation();
	const [profileDropdownToggle] = useState(false);
	const { isShowing, toggle } = useModal();

	return (
		<div className='dashboard-left-bar'>
			{profileDropdownToggle && (
				<div className='profile-dropdown-links'>
					<NavLink to='#' onClick={toggle}>
						Delete Account
					</NavLink>
				</div>
			)}
			<DeleteModal
				isShowing={isShowing}
				hide={toggle}
				setLoggedin={setLoggedin} // GOAL: Have this be a state variable held in Apollo Client cache
			/>
			<NavLink activeClassName='dashnavactive' exact to='/dashboard'>
				<div className='dash-left-menu-btn'>
					<Icon
						icon={ICONS.PERSONALINFO}
						width={24}
						height={24}
						color={pathname === '/dashboard' ? 'white' : '#096dd9'}
					/>
					<div className='dashnav-txt'>Personal Info</div>
				</div>
			</NavLink>
			<NavLink activeClassName='dashnavactive' to='/dashboard/schedule'>
				<div className='dash-left-menu-btn'>
					<Icon
						icon={ICONS.SCHEDULE}
						width={24}
						height={24}
						color={pathname === '/dashboard/schedule' ? 'white' : '#096dd9'}
					/>
					<div className='dashnav-txt'> Schedule</div>
				</div>
			</NavLink>
			<NavLink activeClassName='dashnavactive' to='/dashboard/payments'>
				<div className='dash-left-menu-btn'>
					<Icon
						icon={ICONS.PAYMENTS}
						width={24}
						height={24}
						color={pathname === '/dashboard/payments' ? 'white' : '#096dd9'}
					/>
					<div className='dashnav-txt'> Payments</div>
				</div>
			</NavLink>
			<NavLink activeClassName='dashnavactive' to='/dashboard/settings'>
				<div className='dash-left-menu-btn'>
					<Icon
						icon={ICONS.SETTING}
						width={24}
						height={24}
						color={pathname === '/dashboard/settings' ? 'white' : '#096dd9'}
					/>
					<div className='dashnav-txt'>Settings</div>
				</div>
			</NavLink>
		</div>
	);
}
