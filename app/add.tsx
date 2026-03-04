import LabelInput from "@/components/LabelInput"
import CrudButton from "@/pieces/crudButton"
import { Etudiant, useEtudiantStore } from "@/store/etudiants"
import { border } from "@/styles/border"
import { col1, col2, col4 } from "@/styles/colors"
import { direction, display, gap } from "@/styles/display"
import { size } from "@/styles/size"
import { padding } from "@/styles/spacing"
import { router } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"
const Add = () => {
  const { etudiants, AjouterNouvEtudiant } = useEtudiantStore()
  const [newEtudiant, setNewEtudiant] = useState<Etudiant>({ nom: 'Noona', prenom: 'Arvie', genre: 'F', adresse: 'Fianara', email: 'ndn@jnj.sf' })
  const AddNouvEtudiant = () => {
    AjouterNouvEtudiant(newEtudiant)
    setNewEtudiant({ nom: '', prenom: '', genre: '', adresse: '', email: '' })
  }

  return <View
    style={[
      padding({ value1: 18 }),
      display['flex'],
      direction['column'],
      gap(20),
      border({width: 1, color: col1, radius: 15}),
      size({ height: `${100}%` }),
      {
        backgroundColor: col4
      }
    ]}>
    <View>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '900',
        color: col2,
        fontFamily: 'ubuntu'
      }}>Ajouter de nouveau etudiant</Text>
    </View>
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

    <CrudButton
      variant={'principal'}
      onPress={AddNouvEtudiant}
      text="Ajouter cet etudiant"
    />

    <CrudButton
      variant={'tertiary'}
      onPress={() => router.push('/')}
      text="Quitter"
    />
  </View>
}

export default Add