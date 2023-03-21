import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';

function AdminSidebar() {
	const menu_select = useRef();
	const menuDropDownHandler = () => {
		const menu = menu_select.current.childNodes;
		// menu?.map((e) => console.log(e));
	};
	return (
		<div class="ec-left-sidebar ec-bg-sidebar">
			<div id="sidebar" class="sidebar ec-sidebar-footer">
				<div class="ec-brand">
					<Link to="/">Backend</Link>
				</div>

				<div class="ec-navigation" data-simplebar>
					{/* <!-- sidebar menu --> */}
					<ul class="nav sidebar-inner" id="sidebar-menu" ref={menu_select}>
						<AdminMenu />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AdminSidebar;
