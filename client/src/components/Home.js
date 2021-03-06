import React from  'react';
import { AuthConsumer, } from '../providers/AuthProvider'
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import Navbar from "./Navbar"
const Home = (props) => {
  document.body.style = 'background: #5906A3;'

  return (
    <div>
    <Navbar/>
    <AuthConsumer>
      { auth => (
        <div>{auth.authenticated ? 
          <div>
            {auth.user.teacher ? 
              <TeacherDashboard user={auth.user}/> 
            : 
            <StudentDashboard/>}
            {/* <Button onClick={() => auth.handleLogout(props.history)} inverted>Logout</Button> */}
          </div>
          : 
          <h1>Please login or create an account</h1>
          }
        </div>
      )}


    </AuthConsumer>      
      </div>
  )
}
export default Home;