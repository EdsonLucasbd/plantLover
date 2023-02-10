import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface RegisterPlant {
  name?: string;
  timer?: string;
  id?: string
}

type ContextTypes = {
  plantData: RegisterPlant | null
  registerPlantData(newData: RegisterPlant): Promise<void>
  clearPlantData({ name, id }: RegisterPlant): Promise<void>
  getPlantData({ name, id }: RegisterPlant): Promise<boolean>
  updatePlantData(newData: RegisterPlant): Promise<void>
}

const PlantContext = createContext<ContextTypes>({} as ContextTypes)

export const usePlant = () => {
  const context = useContext(PlantContext)

  if (!context) throw new Error('useAuth must be used within an AuthProvider.')

  return context
}

export const PlantProvider = ({ children }: PropsWithChildren) => {
  const [plantData, setPlantData] = useState<RegisterPlant | null>(null)

  async function registerPlantData(newPlant: RegisterPlant) {
    newPlant !== plantData && setPlantData(newPlant)

    await AsyncStorage.setItem(`@PlantLover:plant-${newPlant.name}-${newPlant.id}`, JSON.stringify(newPlant))

    console.log('new plant', plantData)
  }

  async function updatePlantData(newData: RegisterPlant) {
    const { name, id, timer } = newData
    const storagedPlant = await AsyncStorage.getItem(`@PlantLover:plant-${name}-${id}`)
    try {
      const data = JSON.parse(storagedPlant!)
      const updateData = {
        ...plantData,
        timer: data.timer
      }

      await AsyncStorage.mergeItem(`@PlantLover:plant-${name}-${id}`, JSON.stringify(updateData))

      console.log('update plant', plantData)
    } catch (err) {
      console.error('An error has occurred: ', err)
    }

    setPlantData(null);

  }

  async function getPlantData({ name, id }: RegisterPlant) {
    try {
      const plant = await AsyncStorage.getItem(`@PlantLover:plant-${name}-${id}`)

      return !!plant
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async function clearPlantData({ name, id }: RegisterPlant) {
    await AsyncStorage.removeItem(`@PlantLover:plant-${name}-${id}`);
    setPlantData(null);
  }

  console.log('plant data', plantData)

  return (
    <PlantContext.Provider
      value={{
        plantData, clearPlantData, registerPlantData, getPlantData, updatePlantData
      }}
    >
      {children}
    </PlantContext.Provider>
  );

}

export default { PlantContext, usePlant }