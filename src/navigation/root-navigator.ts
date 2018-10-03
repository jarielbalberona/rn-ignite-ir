import { StackNavigator } from "react-navigation"
import { LandingNavigator } from "./landing-navigator"

export const RootNavigator = StackNavigator(
  {
    landingStack: { screen: LandingNavigator },
  },
  {
    headerMode: "none",
    initialRouteName: "landingStack",
    navigationOptions: { gesturesEnabled: false },
  },
)
