import { EtudiantStoreProvider } from "@/store/etudiants";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <EtudiantStoreProvider>
      <Stack >
        <Stack.Screen name="index" options={{title: "Etudiants"}}/>
        <Stack.Screen name="add" options={{title: "Ajout"}}/>
        <Stack.Screen name="Edit/[id]" options={{title: "Changemt"}}/>
      </Stack>
    </EtudiantStoreProvider>
  );
}
