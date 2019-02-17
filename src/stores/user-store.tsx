import { observable, action, computed } from "mobx"

interface UserInterface {
  login: string
  email: string,
  username: string,
  password: string
}

export default class User {

  @observable users: UserInterface[] = []

  @action addUser = (newUser: any) => {
    this.users.push(newUser)
  }

  @action signUp = async (username: string, password: string) => {
    await fetch("http://localhost:4000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
      }
    )
  }

  @action logMe = () => {
    console.log("MobX works!");
  }

  @computed get userCount() {
    return this.users.length
  }
}

const UserStore = new User()
export { UserStore }
