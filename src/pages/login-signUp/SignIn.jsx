import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import banner from "../../assets/images/more/6.jpeg";
import {Link} from "react-router-dom";

const SignIn = () => {
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
      <form className="mt-8 mb-2 w-full text-white ">
        <div className="mb-4 flex flex-col gap-6 text-white">
          <Input color="white" size="lg" label="Email" className="text-white" name="" />
          <Input color="white" type="password" size="lg" label="Password" className="text-white" name="" />
        </div>
        <Button className="mt-6" fullWidth>
          Sign In
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          No account?{" "}
          <Link to="/signUp" className="text-white font-semibold duration-150 hover:text-green-500">Sign Up</Link>
        </Typography>
      </form>
    </Card>
      </div>
    </section>
  )
}

export default SignIn