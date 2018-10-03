import * as React from "react"
import { observer } from "mobx-react"
import {
  ViewStyle,
  TextStyle,
  View,
  StatusBar,
  Image,
  ImageStyle,
} from "react-native"
import { Text } from "../../shared/text"
import { Screen } from "../../shared/screen"
import { Wallpaper } from "../../shared/wallpaper"
import { Button } from "../../shared/button"
import { color, spacing } from "../../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}
const logo = require("../../assets/images/logo/bowser.png")
const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[6],
}

const WELCOMEACTIONS: ViewStyle = {
  flex: 0,
  backgroundColor: color.transparent,
  flexDirection: "row",
  justifyContent: "space-around",
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
  textAlign: "center",
}

const BOWSER: ImageStyle = {
  alignSelf: "center",
  height: 100,
}

// @inject("mobxstuff")
@observer
export class Welcome extends React.Component<WelcomeScreenProps, {}> {
  render() {
    return (
      <Screen style={FULL}>
        <StatusBar barStyle="light-content" />
        <Wallpaper />
        <Screen
          style={CONTAINER}
          backgroundColor={color.transparent}
          preset="fixedCenter"
        >
          <Text preset="header" tx="welcome.header" style={HEADER} />
          <Image source={logo} style={BOWSER} />
          <View style={WELCOMEACTIONS}>
            <Button preset="link" onPress={() => {}} tx="login.button" />
            <Button preset="link" onPress={() => {}} tx="signup.button" />
          </View>
        </Screen>
        <Screen
          style={CONTAINER}
          backgroundColor={color.transparent}
          preset="fixedCenter"
        >
          <Text preset="header" tx="login.header" style={HEADER} />
        </Screen>
      </Screen>
    )
  }
}
