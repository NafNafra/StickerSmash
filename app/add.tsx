import LabelInput from "@/components/LabelInput"
import { Etudiant, useEtudiantStore } from "@/store/etudiants"
import { direction, display, gap } from "@/styles/display"
import { padding } from "@/styles/spacing"
import { useState } from "react"
import { Button, Text, View } from "react-native"
const Add = () => {
  const { etudiants, AjouterNouvEtudiant} = useEtudiantStore()
  const [newEtudiant, setNewEtudiant] = useState<Etudiant>({ nom: '', prenom: '', genre: '', adresse: '', email: '' })
  const AddNouvEtudiant = () => {
    AjouterNouvEtudiant(newEtudiant)
    setNewEtudiant({ nom: '', prenom: '', genre: '', adresse: '', email: '' })
  }

  return <View
    style={[
      padding({value1:20}),
      display['flex'],
      direction['column'],
      gap(20),
    ]}
  >
    <View><Text>Ajouter de nouveau etudiant</Text></View>
    <View
      style={[
        display['flex'], 
        direction['column'], 
        gap(10)
      ]}
    >
      <LabelInput
        label='Nom'
        value={newEtudiant?.nom}
        setValue={(value: string) => setNewEtudiant(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), nom: value }))}
      />
      <LabelInput
        label='Prenom'
        value={newEtudiant?.prenom}
        setValue={(value: string) => setNewEtudiant(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), prenom: value }))}
      />
      <LabelInput
        label='Genre'
        value={newEtudiant?.genre}
        setValue={(value: string) => setNewEtudiant(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), genre: value }))}
      />
      <LabelInput
        label='Adresse'
        value={newEtudiant?.adresse}
        setValue={(value: string) => setNewEtudiant(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), adresse: value }))}
      />
      <LabelInput
        label='Email'
        value={newEtudiant?.email}
        setValue={(value: string) => setNewEtudiant(prev => ({ ...(prev || { nom: '', prenom: '', genre: '', adresse: '', email: '' }), email: value }))}
      />
    </View>

    <Button title="Ajouter" onPress={AddNouvEtudiant} />
    <View>
      {etudiants.map(e =>(
        <Text key={e.id}>{e.id} - {e.nom + " " + e.prenom} - {e.adresse} - {e.email} - </Text>
      ))}
    </View>
  </View>
}

export default Add