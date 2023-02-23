import { BiImageAdd } from "react-icons/bi";
import { FaCommentAlt, FaFileInvoiceDollar, FaRegChartBar, FaRegMoneyBillAlt, FaTh } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Orders",
    icon: <SiBuymeacoffee />,
    childrens: [
      {
        title: "Add Order",
        path: "/add-Order",
      },
      {
        title: "All Orders",
        path: "/orders",
      },
    ],
  },
  {
    title: "Invoices",
    icon: <FaFileInvoiceDollar />,
    path: "/invoices",
  },
  {
    title: "Bill Reports",
    icon: <FaRegMoneyBillAlt />,
    path: "/bill-reports",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
