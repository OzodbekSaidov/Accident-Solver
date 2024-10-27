import BaseLayout from "../../components/Layout/BaseLayout"
import ReportContainer from "./containers/ReportContainer"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.REPORT_PAGE,
        layout: BaseLayout,
        component: ReportContainer
    }
]