import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
 
import banner from "../../assets/images/more/6.jpeg";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
const {createUser, profileUpdate} = useContext(AuthContext);
const [signUpErr, setSignUpErr] = useState({
  trams: null,
  pass: null,
  email: null,
})
  const handleSignUp = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
    const trams = e.target.trams.checked;
    
    const user = {name, email, photo};
    
    setSignUpErr({...signUpErr, trams: null, pass: null, email: null});
    if(password.length < 6){
     return setSignUpErr({...signUpErr, pass: 'Password must be 6 character or longer'});
    }else if(!/[A-Z]/.test(password)){
      return setSignUpErr({...signUpErr, pass: 'Password must be include one capital letter'});
    }else if(!/[@$!%*#?&]/.test(password)){
      return setSignUpErr({...signUpErr, pass: 'Password must be include one spacial character'});
    }
    if(!trams){
      return setSignUpErr({ signUpErr, trams:'You have must accept trams & condition'})
    }

    createUser(email, password)
    .then(() => {
      profileUpdate(name, photo)
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data => console.log(data))
    })
    .catch(err => console.log(err.message))
    console.log(name, email, password);
  }
  return (
    <section style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
     <div className="max-w-2xl mx-auto px-3 py-32" >
     <div>
     <Card color="white" className="w-full  p-3 backdrop-blur-sm bg-white/10  text-white" shadow={false}>
    <Typography variant="h2" color="white" className="font-roncho text-white/90 text-4xl text-center my-2">
      Sign Up
    </Typography>
    <Typography color="white" className="mt-1 font-normal text-center">
      Enter your details to register.
    </Typography>
    <form onSubmit={handleSignUp} className="mt-8 mb-2 w-full text-white">
      <div className="mb-4 flex flex-col gap-6 text-white">
        <Input required color="white" size="lg" label="Name" name="name" className="text-white" />
        <Input required color="white" size="lg" label="Email" name="email" className="text-white" />
        <Input required color="white" type="password" size="lg" name="password" label="Password" className="text-white" />
          <p className={`text-red-500 bg-white/40 p-1 rounded-sm ${signUpErr.pass ? 'block': 'hidden'}`}>
            {signUpErr.pass && signUpErr.pass}
          </p>
        <Input required color="white" type="text" size="lg" name="photo" label="photo Url" className="text-white" />
      </div>
      <Checkbox name="trams"
        label={
          <Typography
            variant="small"
            color="white"
            className="flex items-center font-normal white"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-gray-900"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <p className={`text-red-500 bg-white/40 p-1 rounded-sm ${signUpErr.trams ? 'block': 'hidden'}`}>
            {signUpErr.trams && signUpErr.trams}
      </p>
      <Button type="submit" className="mt-6" fullWidth>
        Register
      </Button>
      <Typography color="white" className="mt-4 text-center font-normal">
        Already have an account?{" "}
       <Link to="/signIn" className="text-white duration-150 hover:text-green-500 font-semibold">Sign In</Link>
      </Typography>
    </form>
  </Card>
     </div>
     <div></div>
     </div>
    </section>
  )
}

export default SignUp