import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const {createUser}= useContext(AuthContext)
	const navigate = useNavigate()


    const handleRegister = (e)=>{
        e.preventDefault()
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
           if (!/^.{6,}$/.test(password)) {
      // alert('Password must be 6 charst');
      toast.success("password must be 6")
      return
    }
      if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      
      toast.error("You need strong password")
      return
    }
        console.log(name,email,photo,password)
        
        // create user data hare
        createUser(email,password)
            .then(result=> {
                console.log(result)
				navigate('/')
				 toast.success(" signup succesfully")
            })
            .catch(data =>{
                console.log(data)
            })

    }



    return (
        <>

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mt-30 bg-[#1e5a00]">
	<h1 className="text-2xl font-bold text-center">Signup</h1>
	<form onSubmit={handleRegister} className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">name</label>
			<input type="text" name="name"  placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">email</label>
			<input type='email' name="email"  placeholder="enter your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">photoUrl</label>
			<input type="text" name="photo"  placeholder="enter your photo Url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			<div className="flex justify-end text-xs dark:text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign up</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign Login</a>
	</p>
</div>
           
        </>
    );
};

export default SignUp;