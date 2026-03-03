import LabelInput from "@/components/LabelInput"
import { Etudiant, useEtudiantStore } from "@/store/etudiants"
import { direction, display, gap } from "@/styles/display"
import { padding, } from "@/styles/spacing"
import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Button, Text, View } from "react-native"
const Edit = () => {

  const {etudiants, ModifierEtudiant} = useEtudiantStore()
  const {id} = useLocalSearchParams()
  const etudiant = etudiants.find(e=> e.id === id)
  const [modifEtud, setModifEtud] = useState<Etudiant>(etudiant || { nom: '', prenom: '', genre: '', adresse: '', email: '' })

  const ModifExistEtudiant =()=>{
    if(modifEtud !== undefined) {
      ModifierEtudiant(id.toString(), modifEtud)
      router.back()
    }
  }
  return <View
    style={[
      padding({value1:20}),
      display['flex'],
      direction['column'],
      gap(20),
    ]}
  >
    <View><Text>Modifier un etudiant</Text></View>
    <View
      style={[
        display['flex'], 
        direction['column'], 
        gap(10)
      ]}
    >
      <LabelInput
        label='Nom'
        value={etudiant?.nom}
        setValue={(value: string) => setModifEtud(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), nom: value }))}
      />
      <LabelInput
        label='Prenom'
        value={etudiant?.prenom}
        setValue={(value: string) => setModifEtud(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), prenom: value }))}
      />
      <LabelInput
        label='Genre'
        value={etudiant?.genre}
        setValue={(value: string) => setModifEtud(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), genre: value }))}
      />
      <LabelInput
        label='Adresse'
        value={etudiant?.adresse}
        setValue={(value: string) => setModifEtud(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), adresse: value }))}
      />
      <LabelInput
        label='Email'
        value={etudiant?.email}
        setValue={(value: string) => setModifEtud(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), email: value }))}
      />
    </View>

    <Button title="Modifier" onPress={ModifExistEtudiant} />

  </View>
}

export default Edit