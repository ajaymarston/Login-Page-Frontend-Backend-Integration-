import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import bg from "./assets/images/DragonBallWallpaper.jpg"

function Login() {

const navigate = useNavigate()

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [showPassword, setShowPassword] = useState(false)

function login() {

if (email === "" || password === "") {
setError("Please fill all fields")
return
}

axios.post("http://localhost:5000/login", {
email,
password
})
.then(res => {

if (res.data.success) {
navigate("/dashboard")
}
else {
setError(res.data.message)
}

})

}

return (

<div
className="relative h-screen bg-cover bg-center flex items-center justify-center"
style={{
backgroundImage: `url(${bg})`
}}
>

<div className="absolute inset-0 bg-black opacity-30"></div>

<div className="relative bg-black bg-opacity-80 p-10 w-96 rounded ">

<h1 className="text-red-600 text-4xl font-bold mb-6">
NETFLIX
</h1>

<h2 className="text-white text-2xl mb-6">
Sign In
</h2>

<input
type="email"
placeholder="Email"
className="w-full p-3 mb-4 bg-gray-800 text-white rounded"
onChange={(e) => setEmail(e.target.value)}
/>

<div className="relative mb-4">

<input
type={showPassword ? "text" : "password"}
placeholder="Password"
className="w-full p-3 bg-gray-800 text-white rounded"
onChange={(e) => setPassword(e.target.value)}
/>

<button
type="button"
className="absolute right-3 top-3 text-gray-300"
onClick={() => setShowPassword(!showPassword)}
>
{showPassword ? "Hide" : "Show"}
</button>

</div>

{error && (
<p className="text-red-500 mb-3">{error}</p>
)}

<button
className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded"
onClick={login}
>
Sign In
</button>

<p className="text-gray-400 mt-4">
New to Netflix?{" "}
<Link to="/signup" className="text-white hover:underline">
Sign up
</Link>
</p>

</div>

</div>

)

}

export default Login