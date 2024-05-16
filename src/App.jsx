import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Dashboard />} />
						<Route path="/invoices" element={<Dashboard />} />
						<Route
							path="/invoices/:invoiceId"
							element={<h1>This is details for single invoice</h1>}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
