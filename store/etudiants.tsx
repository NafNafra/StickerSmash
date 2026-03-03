import { createContext, ReactNode, useContext, useState } from "react";

export type Etudiant = {
  nom: string;
  prenom: string;
  genre: string;
  adresse: string;
  email: string;
}

export interface EtudiantReq extends Etudiant {
  id: string;
}

// Store context type
interface EtudiantStoreContextType {
  etudiants: EtudiantReq[];
  AjouterNouvEtudiant: (props: Etudiant) => void;
  ModifierEtudiant: (id: string, props: Etudiant) => void;
  SupprimInfoEtudiant: (id: string) => void;
}

// Create context with default values
const EtudiantStoreContext = createContext<EtudiantStoreContextType>({
  etudiants: [],
  AjouterNouvEtudiant: () => {},
  ModifierEtudiant: () => {},
  SupprimInfoEtudiant: () => {},
});

export const EtudiantStoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [etudiants, setEtudiants] = useState<EtudiantReq[]>([])

  const AjouterNouvEtudiant = (props: Etudiant) => {
    const nouvEtudiant: EtudiantReq = {
      id: Date.now().toString(),
      ...props
    }
    setEtudiants(prev => [...prev, nouvEtudiant])
  }

  const ModifierEtudiant = (id: string, props: Etudiant) => {
    setEtudiants(prev => prev.map(e => e.id === id ? { ...e, ...props } : e))
  }

  const SupprimInfoEtudiant = (id: string) => {
    setEtudiants(prev => prev.filter(e => e.id !== id))
  }

  return (
    <EtudiantStoreContext.Provider value={{
      etudiants,
      AjouterNouvEtudiant,
      ModifierEtudiant,
      SupprimInfoEtudiant
    }}>
      {children}
    </EtudiantStoreContext.Provider>
  );
}

export const useEtudiantStore = () => useContext(EtudiantStoreContext);
