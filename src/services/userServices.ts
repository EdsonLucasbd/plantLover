interface Response {
  token?: string,
  user: {
    name: string,
    image?: string
  }
}

export function createUser({ user }: Response): Promise<Response> {
  user.image === undefined && ''
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          name: user.name,
          image: user.image
        }
      })
    }, 2000)
  })
}