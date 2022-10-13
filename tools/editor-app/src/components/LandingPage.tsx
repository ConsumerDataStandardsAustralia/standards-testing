import React from 'react';
import Button from '@mui/material/Button';

const DashboardTemplate = () => {
    return (
        <div>
            <div>
                <header className = 'dashBoardSidebar'>
                <h1 style={{color: "white", textAlign:"left",  paddingTop:"10px"}}>Consumer Data Standards</h1>
                <Button variant="text">Test cases</Button>
                <Button variant="text">Suites</Button>
                <Button variant="text">Assertions</Button>
                {/* <Link className="dashboardLinkMark" style={{textDecoration:"none"}}to={`/customer-registration-page`}>Customer Contacts</Link> */}
                </header>
            </div>
        </div>
    )
}

export {DashboardTemplate};