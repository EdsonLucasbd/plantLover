export type AmbienceType = {
  id: number
  ambienceName: string
}

export type AmbiencesType = {
  ambiences: AmbienceType[]
}

export type GenericPlantType = {
  id?: number
  plantName: string
  plantImage: {
    url: string
  }
  plantRules?: string
  plantWatering?: string
}

export type PlantType = {
  plant: GenericPlantType
}

export type PlantsType = {
  plants: GenericPlantType[]
}