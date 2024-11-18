import { Link } from "react-router-dom";
const Login =()=>{
    return(
        
      <div>
        <ul>
            <li> <Link to="/login"></Link></li>
        
        </ul>
        <div className="text-xl text-center">Simple-Login-Page</div>
      </div>  
    )
}
export default Login;




// APP.JS CODE BELOW THERE

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './Component/Login';
// import { useState } from 'react';

// function App() {
// const router = createBrowserRouter([
//  {
//   path:"/login",
//   element: <Login/>
//  }
// ]);

// const [email , setEmail] = useState("");

// const [password , setPassword] = useState("");

// const handleSubmit =(event)=>{
//   event.preventDefault();
//   if(!email || !password){
//     alert("plaese enter both the fields");
//   } else {
//     alert("form successfully submitted");
//     console.log({email , password})
//   }
// }
// return(
// <>
// <RouterProvider router={router}/>
// <form onSubmit={handleSubmit}>

// <div className='text-center mt-3 '>
// <input value={email} 
//   onChange={(event)=>{
//     setEmail(event.target.value)
//   }}
//   className='rounded-md border-gray-400 bg-gray-200 border-none' type='email'/>
  
  
//   <label htmlFor="">password:</label>
//   <input value={password} 
//   onChange={(event)=>{
//     setPassword(event.target.value)
//   }}
//   className='rounded-md border-gray-400 bg-gray-200 border-none' type='password'/>
  
//   </div>
//   <div className='flex justify-center mt-7'>
// <button

// className='bg-sky-500 p-4 text-xl rounded-md text-white' >submit</button>
//   </div>
// </form>
// </>
// )
// }

// export default App