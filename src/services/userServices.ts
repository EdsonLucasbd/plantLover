interface Response {
  token: string,
  user: {
    name: string,
    image: string
  }
}

export function createUser(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          name: 'Lucas',
          image: ''
        }
      })
    }, 2000)
  })
}