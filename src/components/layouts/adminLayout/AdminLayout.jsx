import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';

function AdminLayout() {
	return (
		<div
			class="ec-header-fixed ec-sidebar-fixed ec-sidebar-light ec-header-light"
			id="body"
		>
			<div class="wrapper">
				<AdminSidebar />
				<div class="ec-page-wrapper">
					<AdminNav />
					<div class="ec-content-wrapper">
						<Outlet />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
