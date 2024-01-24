import { useEffect, useRef, useState } from "react";
import { DollarSign, Users } from "react-feather";
import Bar from "../../components/charts/Barchart";
import HeaderModal from "../../components/header-modal/HeaderModal";
import SummeryCard from "../../components/summery-card/SummeryCard";
import {
  useGetDashboardQuery,
  useMonthlyIncomeExpenseQuery,
} from "../../features/dashboard/dashboard-api";
import useWindowWidth from "../../hooks/useWindow";

function Dashboard() {
  const divRef = useRef(null);
  const [innerWidth, setInnerWidth] = useState(null);
  const [innerHeight, setInnerHeight] = useState(null);
  const [headerModalOpen, setHeaderModalOpen] = useState(true);

  // api hooks
  const { data: dashboardData } = useGetDashboardQuery();
  // const { data: dailyIncomeExpense } = useGetDailyIncomeExpenseQuery();
  const { data: monthlyIncomeExpense } = useMonthlyIncomeExpenseQuery({});

  // hooks
  const w1707 = useWindowWidth(1707);
  const w1450 = useWindowWidth(1450);
  const w900 = useWindowWidth(900);
  const w600 = useWindowWidth(600);
  const w1200 = useWindowWidth(1200);
  const width = useWindowWidth();

  console.log({ width });

  const handleHeaderModal = () => {
    setHeaderModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.clientWidth;
      const height = divRef.current.clientHeight;
      setInnerHeight(height - 70);
      setInnerWidth(width - 80);
    }
  }, []);

  console.log(innerWidth + " " + innerHeight);

  return (
    <div className="space-y-4">
      <div>
        {headerModalOpen && (
          <HeaderModal title="Dashboard" handleClose={handleHeaderModal} />
        )}
      </div>
      <div
        className={`grid ${
          w600
            ? "grid-cols-1"
            : w900
            ? "grid-cols-2"
            : w1707
            ? w1450
              ? "grid-cols-3"
              : "grid-cols-4"
            : "grid-cols-5"
        } justify-between gap-4`}
      >
        <SummeryCard
          text="Total Users"
          Icon={(props) => <Users {...props} />}
          number={dashboardData?.data?.totalUsers}
        />
        <SummeryCard
          text="Approved Users"
          Icon={(props) => <Users color="#fff" {...props} />}
          number={dashboardData?.data?.usersByStatus?.approved || 0}
        />
        <SummeryCard
          text="Pending Users"
          Icon={(props) => <Users {...props} />}
          number={dashboardData?.data?.usersByStatus?.pending || 0}
        />
        <SummeryCard
          text="Total Expenses"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${
            dashboardData?.data?.totalExpense?.totalAmount.toFixed(2) || 0
          }`}
        />
        <SummeryCard
          text="Claimable Amount"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${
            dashboardData?.data?.totalExpense?.totalClaimableAmount.toFixed(
              2
            ) || 0
          }`}
        />
        <SummeryCard
          text="Approved Expenses"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${
            dashboardData?.data?.expenseByStatus?.approved?.totalExpenseAmount.toFixed(
              2
            ) || 0
          }`}
        />
        <SummeryCard
          text="Pending Expenses"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${
            dashboardData?.data?.expenseByStatus?.pending?.totalExpenseAmount.toFixed(
              2
            ) || 0
          }`}
        />
        <SummeryCard
          text="Rejected Expenses"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${
            dashboardData?.data?.expenseByStatus?.rejected?.totalExpenseAmount.toFixed(
              2
            ) || 0
          }`}
        />
        {/* <SummeryCard
          text="Total Income"
          Icon={(props) => <DollarSign {...props} />}
          number={`$${dashboardData?.data?.totalIncome.toFixed(2) || 0}`}
        /> */}
      </div>
      <div
        ref={divRef}
        className="h-[570px] header_bg flex flex-col justify-center items-center rounded-md drop-shadow gap-2 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
      >
        <div className="text-start w-full px-5 header_text dark:text-sky-600 text-lg font-semibold border-b border-sky-300 py-2 dark:border-slate-700">
          Last 12 months income and expenses
        </div>
        <Bar
          width={width - (w1200 ? 50 : 300)}
          height={w600 ? 450 : innerHeight}
          data={monthlyIncomeExpense?.data}
        />
      </div>
    </div>
  );
}

export default Dashboard;
