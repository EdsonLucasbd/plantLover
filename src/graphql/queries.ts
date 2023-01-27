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
      plant {
        plantName
        plantImage {
          url
        }
        plantRules
        plantWatering
      }
    }
  }
`