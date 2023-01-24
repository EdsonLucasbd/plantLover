import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as auth from '../services/userServices'

export interface User {
  name: string;
  image?: string;
}

type ContextTypes = {
  isSigned: boolean
  user: User | null
  isLoading: boolean
  makeUser({ name, image }: User): Promise<void>
  clearUser(): Promise<void>
  show(): Promise<void>
  updateUserImage(img: string): Promise<void>
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
        setIsLoading(false)
      } else setIsLoading(false)
    }

    loadStorageData()
  })

  async function makeUser({ name, image }: User) {
    const newUser = {
      name,
      image
    }
    const response = await auth.createUser({ user: newUser })
    const { user } = response

    setUser(user)

    await AsyncStorage.setItem('@PlantLover:user', JSON.stringify(user))

  }

  async function clearUser() {
    await AsyncStorage.clear();
    setUser(null);
  }

  async function updateUserImage(img: string) {
    const userData = {
      image: img
    }
    await AsyncStorage.mergeItem('@PlantLover:user', JSON.stringify(userData))
  }

  async function show() {
    const data = await AsyncStorage.getItem('@PlantLover:user')
    console.log(data)
  }

  return (
    <AuthContext.Provider value={{ isSigned: !!user, user, makeUser, clearUser, show, updateUserImage, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default { AuthContext, useAuth };