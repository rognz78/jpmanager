
import Badge from '@material-ui/core/Badge';
import Count from "./Count";
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';

export default function HomeBadge() {
    
    const counter = Count();
    return (
        
           <IconButton color="inherit">
           <Badge badgeContent={counter} color="secondary">
           <NotificationsIcon />
           </Badge> 
           </IconButton>
        
    )
}





