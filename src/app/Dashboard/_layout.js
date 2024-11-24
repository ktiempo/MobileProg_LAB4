import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
          />
          <Drawer.Screen
          name="Messages" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Messages',
            title: 'Messages',
          }}
          />
          <Drawer.Screen
          name="Projects" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Projects',
            title: 'Projects',
          }}
          />
          
        </Drawer>    
    </GestureHandlerRootView>
  );
}
