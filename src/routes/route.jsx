import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
// import Dashboard from "../Layout/Main";
import Main from "../Layouts/Main";
// import DashboardCommon from "../DashboardCommon/DashboardCommon";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardCommon from "../DashboardCommon/DashboardCommon";
import Sendmoney from "../UserDashboard/Sendmoney";
import CashOut from "../UserDashboard/CashOut";
import CashIn from "../UserDashboard/CashIn";
import BalanceInquiry from "../UserDashboard/BalanceInquiry";
import TransactionHistory from "../UserDashboard/TransactionHistory";
import TransactionsManagement from "../AgentDashboard/TransactionsManagement";
import AgentBalanceInquiry from "../AgentDashboard/AgentBalanceInquiry";
import AgentTransactionHistory from "../AgentDashboard/AgentTransactionHistory";
import UserManagement from "../AdminDashboard/UserManagement";
export const route = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashBoard',
        element: <Main />,
        children: [

            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'common',
                element: <DashboardCommon />
            },
            // user
            {
                path: 'send-money',
                element: <Sendmoney />
            },
            {
                path: 'cashOut',
                element: <CashOut />
            },
            {
                path: 'cashIn',
                element: <CashIn />
            },
            {
                path: 'balanceInquiry',
                element: <BalanceInquiry />
            },
            {
                path: 'transactionHistory',
                element: <TransactionHistory />
            },
            // agent
            {
                path: 'agentTransactions',
                element: <TransactionsManagement />
            },
            {
                path: 'agentBalance',
                element: <AgentBalanceInquiry />
            },
            {
                path: 'agentTransactionHistory',
                element: <AgentTransactionHistory />
            },
            // admin
            {
                path: 'userManagement',
                element: <UserManagement />
            },
            {
                path: 'systemMonitoring',
                element: <AgentTransactionHistory />
            },
        ]
    },

])