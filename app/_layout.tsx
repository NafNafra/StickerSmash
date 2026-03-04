import AllScreen from "@/components/AllScreen";
import { EtudiantStoreProvider } from "@/store/etudiants";
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <EtudiantStoreProvider>
      <AllScreen>
        <Stack
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="index" options={{ title: "Etudiants" }} />
          <Stack.Screen name="add" options={{ title: "Ajout" }} />
          <Stack.Screen name="edit/[id]" options={{ title: "Changemt" }} />
        </Stack>
      </AllScreen>
    </EtudiantStoreProvider>
  );
}
