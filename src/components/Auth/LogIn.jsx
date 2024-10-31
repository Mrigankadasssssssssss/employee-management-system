import { useState } from "react";


const LogIn = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,password)

        setemail("")
        setpassword("")
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 rounded-xl border-emerald-700 p-20">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className="flex flex-col items-center justify-center gap-7">
                <label className="font-bold text-xl">LogIn</label>
                <input value={email} onChange={(e)=>{
                    setemail(e.target.value)
                }} required className="border-2 border-emerald-600 rounded-full py-3 px-6 text-xl  outline-none bg-transparent mt-4  placeholder:text-gray-500" type="email" placeholder="enter your email..."/>
                <input value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                }} required className="border-2 border-emerald-600 rounded-full py-3 px-6 text-xl  outline-none bg-transparent mt-4  placeholder:text-gray-500"  type="password" placeholder="enter your password..."/>
                <button className="border-none rounded-full py-3 px-6 text-xl bg-emerald-500 mt-5 outline-none bg-transparent placeholder:text-white" >Log In</button>
            </form>
        </div>
      
    </div>
  )
}

export default LogIn
