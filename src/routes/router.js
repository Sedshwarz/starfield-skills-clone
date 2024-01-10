import {Outlet, createBrowserRouter} from "react-router-dom";
import Home from "../component/home/index";
import Settings from "../component/settings_page/index";
import Skills from "../component/skills/index";
import Gallery from "../component/gallery/index";
import Crew from "../component/crew/index";

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/settings',
		element: <Settings />,
		children: [
			{ 
				path: 'gameplay',
				element: <Outlet />
			},
			{ 
				path: 'display',
				element: <Outlet />
			},
			{ 
				path: 'interface',
				element: <Outlet />
			},
			{ 
				path: 'controls',
				element: <Outlet />
			},
			{ 
				path: 'bindings',
				element: <Outlet />
			},
			{ 
				path: 'audio',
				element: <Outlet />
			},
			{ 
				path: 'accessibility',
				element: <Outlet />
			}
		  ]
	},
	{
		path: '/skills',
		element: <Skills />
	},
	{
		path: '/gallery',
		element: <Gallery />
	},
	{
		path: '/crew',
		element: <Crew />
	}
])
export default Router;