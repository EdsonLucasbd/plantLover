import { gql } from "@apollo/client";

export const GET_ALL_AMBIENCES = gql`
  query {
    ambiences {
      id
      ambienceName
    }
  }
`

export const GET_ALL_PLANTS = gql`
  query getAllPlants {
    plants {
      id
      plantName
      plantImage {
        url
      }
      plantRules
      plantWatering
    }
  }
`

export const GET_PLANT = gql`
  query getPlant($id: ID!) {
    plant(where: {id: $id}) {
      id
      plantName
      plantImage {
        url
      }
      plantRules
      plantWatering
    }
  }
`