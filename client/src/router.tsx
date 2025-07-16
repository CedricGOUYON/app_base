import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import ImagesPage from "./pages/imagesPage/ImagesPage";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ProfessionalStoryPage from "./pages/professionalStoryPage/ProfessionalStoryPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "*", element: <NotFoundPage /> },
			{ path: "/signUp", element: <SignUpPage /> },
			{ path: "/Login", element: <LoginPage /> },
			{ path: "/Portfolio", element: <PortfolioPage /> },
			{ path: "/my-professional-story", element: <ProfessionalStoryPage /> },
			{ path: "/images", element: <ImagesPage /> },
		],
	},
]);
export default router;
