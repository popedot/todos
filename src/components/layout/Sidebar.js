import classNames from 'classnames';
import classes from './Sidebar.module.scss';

function Sidebar(props) {
    const sidebarClasses = classNames(classes.sidebar, {[classes.sidebarActive]: props.sidebarIsOpen});

    function toggleSidebarHandler(param) {
        props.onSidebar((param) => !param);
    }
    
    return (
            <div className={sidebarClasses}>
                <h2 className={classes.header}>Todos</h2>
                <ul className={classes.menu}>
                    <li className={classes.menuItem}>Todos</li>
                    <li className={classes.menuItem}>Settings</li>
                </ul>
                <button className={classes.sidebarButton} onClick={toggleSidebarHandler}>
                        <i className="fa fa-bars"></i>
                </button>
            </div>
    )
}

export default Sidebar;