
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            TaskManager
        </div>
        <div className="navbar-links">
            <Link to="/tasks">All Task </Link>
            <Link to="/tasks/add">Add Task</Link>
             
        </div>

    </nav>
  )
}
