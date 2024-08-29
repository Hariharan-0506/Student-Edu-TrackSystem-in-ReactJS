import React from 'react';
import './Student.css';
import logo from './logo1.jpg';

function Student() {
  return (
    <div className="student-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Preset Pacesetters" />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <i className="fas fa-users"></i> Student Management
          </li>
          <li className="menu-item">
            <i className="fas fa-money-check-alt"></i> Financial Management
          </li>
          <li className="menu-item">
            <i className="fas fa-tasks"></i> Quality Control
          </li>
          <li className="menu-item">
            <i className="fas fa-file-alt"></i> Report Delivery
          </li>
          <li className="menu-item">
            <i className="fas fa-calendar-check"></i> Attendance
          </li>
        </ul>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h2>Student Management</h2>
        </header>

        <div className="status-cards">
          <div className="status-card red">
            <i className="fas fa-user"></i>
            <span>8</span>
            <p>Regular Students</p>
          </div>
          <div className="status-card purple">
            <i className="fas fa-user-graduate"></i>
            <span>13</span>
            <p>Remedial Students</p>
          </div>
          <div className="status-card green">
            <i className="fas fa-user-circle"></i>
            <span>00</span>
            <p>In Paid Clubs</p>
          </div>
        </div>

        <div className="menu-grid">
          <div className="menu-item">
            <i className="fas fa-user-plus"></i>
            <p>Regular Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-book"></i>
            <p>Remedial Enrollment</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-users-cog"></i>
            <p>Club Management</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-envelope"></i>
            <p>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-chart-bar"></i>
            <p>Attendance</p>
          </div>
          <div className="menu-item">
            <i className="fas fa-clinic-medical"></i>
            <p>Clinic</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Student;
