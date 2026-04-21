import { Check, Clock, RefreshCw} from "lucide-react";

function StatusBadge ({status}) {
    // Convert status to match CSS class naming
    const statusClass = status.toLowerCase().replaceAll(" ", "-");

    // Map each status to an icon
    const iconMap = {
        "In Review": <Clock size={14} />,
        "Approved": <Check size={14} />,
        "In Progress": <RefreshCw size={14} />
    };
    
    // Generates a badge with the appropriate class and icon based on the status prop
    return (
        <span className = {`badge badge--${statusClass}`}>
            {iconMap[status]} {status}
        </span>
    )
}

export default StatusBadge;