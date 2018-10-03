import { StackNavigator } from "react-navigation"
import { Welcome } from "../views/landing/welcome"
import { LandingSubNavigator } from "./landing-sub-navigator"

export const LandingNavigator = StackNavigator(
  {
    index: { screen: Welcome },
    actionStack: { screen: LandingSubNavigator },
  },
  {
    headerMode: "none",
  },
)
