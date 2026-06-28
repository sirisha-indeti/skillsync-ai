import React from 'react'

function Profile({ user }) {
  return (
    <div className="page-card">
      <h2>Profile</h2>
      <p>Update your profile information and preferences.</p>
      <div className="profile-box">
        <p><strong>Name:</strong> {user?.name || 'Guest'}</p>
        <p><strong>Email:</strong> {user?.email || 'Not available'}</p>
        <p><strong>Role:</strong> {user?.role || 'Member'}</p>
      </div>
    </div>
  )
}

export default Profile
