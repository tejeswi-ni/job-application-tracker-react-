import "./StatusBadge.css";

import {
  FiClock,
  FiSearch,
  FiUsers,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

function StatusBadge({ status }) {
  const statusConfig = {
    Applied: {
      className: "status-applied",
      icon: <FiClock />,
    },
    Screening: {
      className: "status-screening",
      icon: <FiSearch />,
    },
    Interview: {
      className: "status-interview",
      icon: <FiUsers />,
    },
    Offer: {
      className: "status-offer",
      icon: <FiCheckCircle />,
    },
    Rejected: {
      className: "status-rejected",
      icon: <FiXCircle />,
    },
  };

  const current = statusConfig[status] || {
    className: "", icon: null,
  };

  return (
    <span className={`status-badge ${current.className}`}>
      {current.icon}
      {status}
    </span>
  );
}

export default StatusBadge;