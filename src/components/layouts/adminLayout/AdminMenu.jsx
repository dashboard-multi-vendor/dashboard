import React from 'react';
import { NavLink } from 'react-router-dom';
export const adminMenuItems = [
	{
		id: 'a',
		group: [
			{
				id: 'a1',
				path: '/',
				name: 'Dashboard',
				icon: '',
			},
		],
	},
	{
		id: 'b',
		group: [
			{
				id: 'b1',
				path: '/',
				name: 'Vendors',
				icon: '',
			},
			{
				id: 'b2',
				path: '/',
				name: 'Affiliates',
				icon: '',
			},
		],
	},
	{
		id: 'c',
		group: [
			{
				id: 'c1',
				path: '/',
				name: 'Category',
				icon: 's',
				subMenu: [
					{
						id: 'c1-sub1',
						path: '/',
						name: 'Main Category',
						icon: 's',
					},
					{
						id: 'c1-sub2',
						path: '/',
						name: 'Sub Category',
						icon: 's',
					},
				],
			},
			{
				id: 'c2',
				path: '/',
				name: 'Product',
				icon: '',
				subMenu: [
					{
						id: 'c2-sub1',
						path: '/',
						name: 'Add Product',
						icon: 's',
					},
					{
						id: 'c2-sub2',
						path: '/',
						name: 'All Product',
						icon: 's',
					},
				],
			},
			{
				id: 'c3',
				path: '/',
				name: 'Brand',
				icon: '',
			},
		],
	},
];
function AdminMenu() {
	return adminMenuItems.map((group) => (
		<li class="has-sub">
			{group?.group?.map((menu) => (
				<>
					<NavLink class="sidenav-item-link">
						<img class="mr-3" src="assets/icons/products.svg" alt="" />
						<span class="nav-text">{menu?.name}</span>
						{menu.subMenu && <b class="caret"></b>}
					</NavLink>
					{menu.subMenu && (
						<div class="collapse">
							<ul class="sub-menu" id="products" data-parent="#sidebar-menu">
								{menu.subMenu?.map((sub) => (
									<li class="">
										<a class="sidenav-item-link" href="product-add.html">
											<span class="nav-text">Add Product</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</>
			))}
			<hr />
		</li>
	));
}

export default AdminMenu;

// <li class="active">
// 	<a class="sidenav-item-link">
// 		<svg
// 			width="20"
// 			height="20"
// 			viewBox="0 0 20 20"
// 			fill="none"
// 			xmlns="http://www.w3.org/2000/svg"
// 			class="mr-3"
// 		>
// 			<path
// 				d="M0 2.47934V9.09091H9.09091V0H2.47934C1.82178 0 1.19115 0.261215 0.726182 0.726182C0.261215 1.19115 0 1.82178 0 2.47934Z"
// 				fill="#fff"
// 			/>
// 			<path
// 				d="M17.5208 0H10.9092V9.09091H20.0001V2.47934C20.0001 1.82178 19.7389 1.19115 19.2739 0.726182C18.8089 0.261215 18.1783 0 17.5208 0V0Z"
// 				fill="#fff"
// 			/>
// 			<path
// 				d="M0 17.5207C0 18.1783 0.261215 18.8089 0.726182 19.2738C1.19115 19.7388 1.82178 20 2.47934 20H9.09091V10.9091H0V17.5207Z"
// 				fill="#fff"
// 			/>
// 			<path
// 				d="M10.9092 20H17.5208C18.1783 20 18.8089 19.7388 19.2739 19.2738C19.7389 18.8089 20.0001 18.1783 20.0001 17.5207V10.9091H10.9092V20Z"
// 				fill="#fff"
// 			/>
// 		</svg>
// 		<span class="nav-text">Dashboard</span>
// 	</a>
// 	<hr />
// </li>

// <li class="has-sub">
// 	<a class="sidenav-item-link" href="vendor-list.html">
// 		<img class="mr-3" src="assets/icons/vendors.svg" alt="" />
// 		<span class="nav-text">Vendors</span>
// 	</a>
// </li>

// <li class="has-sub">
// 	<a class="sidenav-item-link" href="user-list.html">
// 		<img class="mr-3" src="assets/icons/affiliator.svg" alt="" />
// 		<span class="nav-text">Affiliates</span>
// 	</a>
// 	<hr />
// </li>

// <li class="has-sub expand">
// 	<a class="sidenav-item-link" href="javascript:void(0)">
// 		<img class="mr-3" src="assets/icons//categories.svg" alt="" />
// 		<span class="nav-text">Categories</span> <b class="caret"></b>
// 	</a>
// 	<div class="collapse">
// 		<ul class="sub-menu" id="categorys" data-parent="#sidebar-menu">
// 			<li class="">
// 				<a class="sidenav-item-link" href="main-category.html">
// 					<span class="nav-text">Main Category</span>
// 				</a>
// 			</li>
// 			<li class="">
// 				<a class="sidenav-item-link" href="sub-category.html">
// 					<span class="nav-text">Sub Category</span>
// 				</a>
// 			</li>
// 		</ul>
// 	</div>
// </li>

// <li class="has-sub">
// 	<a class="sidenav-item-link" href="javascript:void(0)">
// 		<img class="mr-3" src="assets/icons/products.svg" alt="" />
// 		<span class="nav-text">Products</span> <b class="caret"></b>
// 	</a>
// 	<div class="collapse">
// 		<ul class="sub-menu" id="products" data-parent="#sidebar-menu">
// 			<li class="">
// 				<a class="sidenav-item-link" href="product-add.html">
// 					<span class="nav-text">Add Product</span>
// 				</a>
// 			</li>
// 			<li class="">
// 				<a class="sidenav-item-link" href="product-list.html">
// 					<span class="nav-text">All Products</span>
// 				</a>
// 			</li>
// 		</ul>
// 	</div>
// </li>

// <li class="has-sub">
// 	<a class="sidenav-item-link" href="order-history.html">
// 		<img class="mr-3" src="assets/icons/orders.svg" alt="" />
// 		<span class="nav-text">Orders</span>
// 	</a>
// </li>

// <li>
// 	<a class="sidenav-item-link" href="review-list.html">
// 		<img class="mr-3" src="assets/icons/reviews.svg" alt="" />
// 		<span class="nav-text">Reviews</span>
// 	</a>
// </li>

// <li>
// 	<a class="sidenav-item-link" href="brand-list.html">
// 		<img class="mr-3" src="assets/icons/transections.svg" alt="" />
// 		<span class="nav-text">Transections</span>
// 	</a>
// 	<hr />
// </li>
// <li>
// 	<a class="sidenav-item-link" href="brand-list.html">
// 		<img class="mr-3" src="assets/icons/invoice.svg" alt="" />
// 		<span class="nav-text">Invoice</span>
// 	</a>
// 	<hr />
// </li>

// <li class="has-sub">
// 	<a class="sidenav-item-link" href="javascript:void(0)">
// 		<i class="mdi mdi-login"></i>
// 		<span class="nav-text">Authentication</span>
// 		<b class="caret"></b>
// 	</a>
// 	<div class="collapse">
// 		<ul
// 			class="sub-menu"
// 			id="authentication"
// 			data-parent="#sidebar-menu"
// 		>
// 			<li class="">
// 				<a href="sign-in.html">
// 					<span class="nav-text">Sign In</span>
// 				</a>
// 			</li>
// 			<li class="">
// 				<a href="sign-up.html">
// 					<span class="nav-text">Sign Up</span>
// 				</a>
// 			</li>
// 		</ul>
// 	</div>
// </li>
