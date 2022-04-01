import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
    const {loginWithRedirect} = useAuth0();
  return <button onClick={()=>loginWithRedirect() } className="py-2 px-4 bg-brand">Login</button>;
};

export default LandingPage;
