// import { useState, useEffect } from "react";
// import { fetchAgreementsPerMonth } from "../utils/getAgreement";
// import { fetchParcelNumber } from "../utils/getParcelNumber";
// import { fetchUsersPerMonth } from "../utils/getUsers";
// import { fetchTransactionsData } from "../utils/getTransactions";

// const useDashboardData = () => {
//   const [usersData, setUsersData] = useState<Array<{
//     month: string;
//     sellers: number;
//     buyers: number;
//   }> | null>(null);

//   const [contractsData, setContractsData] = useState<Array<{
//     month: string;
//     totalContracts: number;
//   }> | null>(null);

//   const [landPlotsData, setLandPlotsData] = useState<{
//     count: number;
//     titlesCount: number;
//   } | null>(null);

//   const [transactionsData] = useState<Array<{
//     month: string;
//     ongoing: number;
//     completed: number;
//   }> | null>(null);

//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const users = await fetchUsersPerMonth();
//         const contracts = await fetchAgreementsPerMonth();
//         const landPlots = await fetchParcelNumber();

//         const transactions = await fetchTransactionsData();

//         // const transformedTransactions = transactions?.map((transaction) => ({
//         //   month: transaction.month,
//         //   ongoing: transaction.ongoing || 0, // Ensure defaults if the data structure is missing ongoing/completed
//         //   completed: transaction.completed || 0,
//         // }));

//         setUsersData(users);
//         setContractsData(contracts);
//         setLandPlotsData(landPlots);
//         // setTransactionsData(transformedTransactions);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching dashboard data:", err);
//         setError("Failed to fetch dashboard data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return {
//     usersData,
//     contractsData,
//     landPlotsData,
//     transactionsData,
//     loading,
//     error,
//   };
// };

// export default useDashboardData;
