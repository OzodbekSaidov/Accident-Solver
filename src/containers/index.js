import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import AccountPage from "./AccountPage/AccountPage";
import ReportPage from "./ReportPage/ReportPage";

const tester = () => [
  ...HomePage(),
  ...LoginPage(),
  ...AccountPage(),
  ...ReportPage(),
];

const Routes = () => [...tester()];

export default Routes;
