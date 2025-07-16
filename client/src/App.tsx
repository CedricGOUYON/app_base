import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ToastContainer />
		</>
	);
}

export default App;
