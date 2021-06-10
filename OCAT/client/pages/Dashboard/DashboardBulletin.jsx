import React from 'react';
import { NavLink } from 'react-router-dom';

export const DashboardBulletin = () =>
  <>
    <div>
      <h1>OCAT Dashboard</h1>
      <NavLink to="/assessment/new">New</NavLink>
      {/* <button href="/assessment/list">List</button> */}
      <hr />
    </div>
  </>;
