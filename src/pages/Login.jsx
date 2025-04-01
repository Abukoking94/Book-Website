import AuthForm from "../components/AuthForm";

const Login = () => {
  const handleLogin = async (data) => {
    console.log("Logging in with:", data);
    alert("Login successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <AuthForm isSignup={false} onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
