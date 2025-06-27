import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user)
  const navigaate= useNavigate()

  const handleSignOut = ()=>{
    logOut()
        .then(result=>{
            toast.error('sign out successfully')
            navigaate('/')
            console.log((result))
        })
        .catch(error=>{
            console.log(error)
        })
  }

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="font-bold text-3xl text-center mb-6">
        Welcome to your Profile
      </h1>
      <br />
      <br />

      <div className="card w-full max-w-md bg-base-100 shadow-xl border-t-4 border-[#008236]">
        <div className="flex flex-col items-center p-6">
          <div className="avatar -mt-16">
            <div className="w-24 rounded-full ring ring-white ring-offset-2 ring-offset-base-100">
              <img src={user?.photoURL || 'https://i.ibb.co/Cn8d0Fg/tree-avatar.png'} alt="User Avatar" />
            </div>
          </div>

          <h2 className="text-lg font-bold text-orange-600 mt-4">{user?.displayName || 'N/A'}</h2>
          <div className="badge badge-outline mt-1 px-4 py-1 text-sm">
            {user?.email || 'No Email'}
          </div>

          <div className="divider my-4">Profile Details</div>

          <div className="text-sm space-y-2 text-center">
            <p><span className="font-semibold">Account Created:</span> N/A</p>
            <p><span className="font-semibold">Last Sign In: </span>  </p>
            <p><span className="font-semibold">User ID:</span> {user?.uid || 'N/A'}</p>
            <p>
              <span className="font-semibold">Email Verified:</span>{' '}
              <span className={user?.emailVerified ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                {user?.emailVerified ? 'Yes' : 'No'}
              </span>
            </p>
          </div>

          <button onClick={handleSignOut} className="btn bg-[#016630] text-white btn-wide mt-6">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
