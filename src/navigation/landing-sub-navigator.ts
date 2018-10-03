import { TabNavigator } from "react-navigation"
import { Login } from "../views/landing/login"
import { Signup } from "../views/landing/signup"

export const LandingSubNavigator = TabNavigator({
  login: { screen: Login },
  signup: { screen: Signup },
})
