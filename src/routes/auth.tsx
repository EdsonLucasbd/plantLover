import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as auth from '../services/userServices'

interface User {
  name: string;
  image: string;
}

type ContextTypes = {
  isSigned: boolean
  user: User | null
  isLoading: boolean
  makeUser(): Promise<void>
}


const AuthContext = createContext<ContextTypes>({} as ContextTypes)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within an AuthProvider.')

  return context
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@PlantLover:user')

      if (storagedUser) {
        setUser(JSON.parse(storagedUser))
      }
      setIsLoading(false)
    }

    loadStorageData()
  })

  async function makeUser() {
    const response = await auth.createUser()
    const { user } = response

    setUser(user)

    await AsyncStorage.setItem('@PlantLover:user', JSON.stringify(user))

  }

  return (
    <AuthContext.Provider value={{ isSigned: !!user, user, makeUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default { AuthContext, useAuth };