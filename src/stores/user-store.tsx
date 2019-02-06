import { observable, action, computed } from "mobx"

interface UserInterface {
  login: string
  email: string
  password: string
}

class User {

  @observable users: UserInterface[] = []

  @action addUser = (newUser: any) => {
    this.users.push(newUser)
  }

  @action logMe = () => {
    console.log("MobX works!");
  }

  @computed get userCount() {
    return this.users.length
  }
}

export const UserStore = new User()
