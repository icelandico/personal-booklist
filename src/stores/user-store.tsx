import { observable, action } from "mobx"

interface UserInterface {
  login: string
  email: string,
  username: string,
  password: string,
}

export default class User {

  @observable users: UserInterface[] = []

  @observable loggedIn: boolean = false

  @action addUser = (newUser: any) => {
    this.users.push(newUser)
  }

  @action signUp = async (email: string, password: string) => {
    fetch("http://localhost:4000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      }
    ).then(res => res.status)
  }

  @action logMe = () => {
    console.log("MobX works!");
  }

}

const UserStore = new User()
export { UserStore }
