import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import banner from "../../assets/images/more/6.jpeg";
import {Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const {signIn} = useContext(AuthContext);
  const [signInErr, setSignInErr] = useState(null);
  const navigate = useNavigate();
 
  const handleSignIn = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    
    signIn(email, password)
    .then(result => {
      console.log(result.user);
      const user = {
        email,
        lastSignInTime: result?.user?.metadata?.lastSignInTime,
      }
  
      fetch(`https://my-coffee-store-server-42luiy345-md-shaheds-projects.vercel.app/users`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
      }
      )
      .then(res => res.json())
      .then(data => console.log(data))

      navigate('/');
      Swal.fire({
        title: 'Success',
        text: 'Login successful',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .catch(err=> {
      if(err.message === 'Firebase: Error (auth/invalid-login-credentials).'){
        setSignInErr('Your email and password was incorrect');
      }
    })
  }
  return (
    <section style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <div className="max-w-2xl mx-auto px-3 py-32">
      <Card color="transparent" className="backdrop-blur-sm p-3 bg-white/10" shadow={false}>
      <Typography variant="h4" color="white" className="text-4xl font-roncho text-center">
        Sign In
      </Typography>
      <Typography color="white" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      <form autoComplete="off" onSubmit={handleSignIn} className="mt-8 mb-2 w-full text-white ">
        <div className="mb-4 flex flex-col gap-6 text-white">
          <Input  required color="white" size="lg" type="email" label="Email" className="text-white" name="email" />
          <Input required color="white" type="password" size="lg" label="Password" className="text-white" name="password" />
        </div>
        <Button type="submit" className="mt-6" fullWidth>
          Sign In
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          No account?{" "}
          <Link to="/signUp" className="text-white font-semibold duration-150 hover:text-green-500">Sign Up</Link>
        </Typography>
        <p className={`text-red-500 bg-white/40 p-1 rounded-sm ${signInErr ? 'block': 'hidden'}`}>
            {signInErr && signInErr}
          </p>
      </form>
    </Card>
      </div>
    </section>
  )
}

export default SignIn