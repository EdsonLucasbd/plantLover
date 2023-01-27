export type AmbienceType = {
  id: number
  ambienceName: string
}

export type AmbiencesType = {
  ambiences: AmbienceType[]
}

export type PlantType = {
  id?: number
  plant: {
    plantName: string
    plantImage: {
      url: string
    }
    plantRules: string
    plantWatering: string
  }
}

export type PlantsType = {
  plants: PlantType[]
}