import asyncComponent from "../../utils/asyncComponent";

const Login = asyncComponent(() => import('../../components/auth/login'));


export default function LoginPage() {
  return (
    <Login/>
  )
}
