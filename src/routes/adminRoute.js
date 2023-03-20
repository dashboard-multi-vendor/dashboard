import AdminLayout from '../components/layouts/adminLayout/AdminLayout';
import AdminDashboard from '../components/pages/admin-dashboard/AdminDashboard';
import Affiliate from '../components/pages/admin-dashboard/affiliate-section/Affiliate';
import Brand from '../components/pages/admin-dashboard/brand/Brand';
import Category from '../components/pages/admin-dashboard/category/Category';
import Vendor from '../components/pages/admin-dashboard/vendor-section/Vendor';

export const adminRoute = {
	path: '/',
	element: <AdminLayout />,
	children: [
		{
			path: '/',
			element: <AdminDashboard />,
		},
		{
			path: '/vendor',
			element: <Vendor />,
		},
		{
			path: '/affiliate',
			element: <Affiliate />,
		},
		{
			path: '/category',
			element: <Category />,
		},
		{
			path: '/brand',
			element: <Brand />,
		},
	],
};
