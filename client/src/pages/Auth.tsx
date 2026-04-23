import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { sanctumRequest } from '../config/sanctumRequest';
import AuthLayout from '../layouts/AuthLayout'
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

type FormData = {
  'name': string,
  'email': string,
  'password': string,
  'password_confirmation': string,
}

const Auth = () => {
  const [mode, setMode] = useState("login");
  const { register, handleSubmit, formState: { isValid, isSubmitting } } = useForm();
  const formTitle = mode === "login" ? "Welcome Back" : "Begin Your Experience";
  
  const navigate = useNavigate();

  
  const onSubmit = async (data: FormData) => {
    const response = await sanctumRequest(
      'post',
      '/api/auth/login/',
      data
    );
  
    if (response.data.status === 'true') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    }
  };

  return (
    <AuthLayout>
      <div className="relative z-10 min-h-full flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-tertiary/30 backdrop-blur-3xl">

          {/* left */}
          <div className="hidden lg:flex lg:col-span-7 flex-col justify-between p-12 relative">
            <div className="z-10">
              <h1 className="font-bold tracking-tighter text-6xl">
                GoShopping
              </h1>
              <p className="mt-8 max-w-sm leading-relaxed">
                Discover a streamlined shopping experience built around quality, not quantity.
                From everyday essentials to standout pieces, every item is selected to bring function, beauty, and purpose into your daily life.
              </p>
            </div>
            <div className="mt-auto z-10 flex gap-4">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <div className="h-1 w-4 bg-primary rounded-full"></div>
              <div className="h-1 w-4 bg-primary rounded-full"></div>
            </div>
          </div>
          {/* left end */}

          {/* right */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="glass-panel w-full p-8 md:p-10 rounded-xl relative overflow-hidden">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight mb-6">{formTitle}</h2>
                <div className="inline-flex p-1 rounded-full bg-secondary/5">
                  <button onClick={() => setMode("login")} className={`px-6 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer ${mode === "login" && "font-semibold shadow-sm bg-white pointer-events-none"}`}>
                    Login
                  </button>
                  <button onClick={() => setMode("register")} className={`px-6 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer ${mode === "register" && "font-semibold shadow-sm bg-white pointer-events-none"}`} >
                    Register
                  </button>
                </div>
              </div>

              {/* form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {mode === "register" && (
                  <div className="space-y-1">
                    <label className="font-medium" htmlFor="name">Name</label>
                    <div className="relative">
                      <Input id="name" placeholder="name" type="text" {...register("name", { required: true })} />
                    </div>
                  </div>
                )}
                <div className="space-y-1">
                  <label className="block font-medium ml-2" htmlFor="email">Email</label>
                  <div className="relative">
                    <Input id="email" placeholder="name@email.com" type="email" {...register("email", { required: true })} />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="font-medium" htmlFor="password">Password</label>
                  <div className="relative">
                    <Input id="password" placeholder="••••••••" type="password" {...register("password", { required: true })} />
                  </div>
                </div>
                {mode === "register" && (
                  <div className="space-y-1">
                    <label className="font-medium" htmlFor="password_confirmation">Confirm Password</label>
                    <div className="relative">
                      <Input id="password_confirmation" placeholder="••••••••" type="password" {...register("password_confirmation", { required: true })} />
                    </div>
                  </div>
                )}
                <Button variant="confirm" children={mode === "login" ? "Login" : "Register"} disabled={!isValid || isSubmitting} />
              </form>
              {/* form end */}

              <p className="mt-6 text-center text-[0.7rem] leading-relaxed">
                By entering, you agree to our
                <a className="underline underline-offset-4 hover:decoration-tertiary transition-all" href="#"> Terms of Service </a>
                and
                <a className="underline underline-offset-4 hover:decoration-tertiary transition-all" href="#"> Privacy Policy</a>.
              </p>
            </div>
          </div>
          {/* right end */}

        </div>
      </div >
    </AuthLayout >
  )
}

export default Auth