import React from 'react';
import { useHistory } from 'react-router';

const Profile = () => {
    const history = useHistory()
    return (
        <>
        <h1>Profile</h1>
        <button onClick={()=>{
            history.push('/')
        }}>go to Home</button>
    </>
    );
};

export default Profile;
// use Route => able to use back button. Updating the selected area only (*biggest difference btn HTML link tag => going to the totally different page). 
// SPA : originally can't use back button <- single page 