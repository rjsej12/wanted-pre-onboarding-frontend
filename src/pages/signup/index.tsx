import useAuth from '../../components/commons/hooks/useAuth';
import SignIn from '../../components/units/signin/SignIn.container';

export default function SignUpPage() {
  useAuth();

  return <SignIn isSignUp={true} />;
}
