import LabelInput from "@/components/LabelInput"
import CrudButton from "@/pieces/crudButton"
import { Etudiant, useEtudiantStore } from "@/store/etudiants"
import { border } from "@/styles/border"
import { col1, col2 } from "@/styles/colors"
import { direction, display, gap } from "@/styles/display"
import { padding, } from "@/styles/spacing"
import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"
const Edit = () => {

  const { etudiants, ModifierEtudiant } = useEtudiantStore()
  const { id } = useLocalSearchParams()
  const etudiant = etudiants.find(e => e.id === id)
  const [modifEtud, setModifEtud] = useState<Etudiant>(etudiant || { nom: '', prenom: '', genre: '', adresse: '', email: '' })

  const ModifExistEtudiant = () => {
    if (modifEtud !== undefined) {
      ModifierEtudiant(id.toString(), modifEtud)
      router.back()
    }
  }
  return <View
    style={[
      border({ width: 1, color: col1, radius: 15 }),
      padding({ value1: 20 }),
      display['flex'],
      direction['column'],
      gap(20),
    ]}
  >
    <View>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '900',
        color: col2,
      }}>Modifier un etudiant</Text></View>
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

    <CrudButton
      variant={'principal'}
      onPress={ModifExistEtudiant}
      text="Appliquer les modifications"
    />
    <CrudButton
      variant={'tertiary'}
      onPress={() => router.back()}
      text="Quitter"
    />

  </View>
}

export default Edit
