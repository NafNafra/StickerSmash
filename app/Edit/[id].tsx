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
        value={modifEtud.nom}
        setValue={(value: string) => setModifEtud(prev => ({ ...prev, nom: value }))}
      />
      <LabelInput
        label='Prenom'
        value={modifEtud.prenom}
        setValue={(value: string) => setModifEtud(prev => ({ ...prev, prenom: value }))}
      />
      <LabelInput
        label='Genre'
        value={modifEtud.genre}
        setValue={(value: string) => setModifEtud(prev => ({ ...prev, genre: value }))}
      />
      <LabelInput
        label='Adresse'
        value={modifEtud.adresse}
        setValue={(value: string) => setModifEtud(prev => ({ ...prev, adresse: value }))}
      />
      <LabelInput
        label='Email'
        value={modifEtud.email}
        setValue={(value: string) => setModifEtud(prev => ({ ...prev, email: value }))}
      />
    </View>

    <Button title="Modifier" onPress={ModifExistEtudiant} />

  </View>
}

export default Edit
