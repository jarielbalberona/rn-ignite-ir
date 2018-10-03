import { StackNavigator } from "react-navigation"
import { Welcome } from "../views/landing/welcome"

export const LandingNavigator = StackNavigator(
  {
    index: { screen: Welcome },
  },
  {
    headerMode: "none",
  },
)
