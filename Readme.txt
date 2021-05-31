
---- NOTES ----


Note 01: 
in some cases using yarn have been better.
https://vander.host/knowledgebase/software-development/what-is-the-yarn-equivalent-of-npm-install/


Note 02: 
if "npm install" does not work properly do the followings
 #>expo update
 #>yarn upgrade


 ---- /NOTES ----


Simple react native app to show the followings

- how to add navigation ability using react navigation packages as below

#>npm install react-navigation-stack
#>npm install react-navigation-tabs
#>npm install react-navigation-drawer

#>npm install --save react-navigation

#>expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
  - problem occured with last version of eact-native-reanimated
    so, I installed version 1.13.0
    #>yarn add eact-native-reanimated@1.13.0

- how to navigate with coding

    - props.navigation.navigate({})
    - props.navigation.pop('') or popToTop
    - props.navigation.replace('') (good for login/register/etc)

- how to send parameter from screen(component) to another screen(component)
    
    - props.navigation.getParam('')

- how to config headers of screens with defaultNavigationOptions


- how to make screens more efficient for multi-screen projects by using the followings

  import { enableScreens } from 'react-native-screens'
  ...
  enableScreens();


- how to use vector-icons

   #>npm install --save @expo/vector-icons


- how to use buttons in headers

   #>npm install --save react-navigation-header-buttons   
   if this does not work use yarn
   
   #>yarn add react-navigation-header-buttons


- how to use tab navigators
  #>yarn add react-navigation-material-bottom-tabs
  #>yarn add react-native-paper

- how to use "Stack Navigator" in "Tab Navigator"





