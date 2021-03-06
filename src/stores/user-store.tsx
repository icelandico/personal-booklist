import { observable, action } from "mobx"
import { userInfo } from "os";

interface UserInterface {
  username: string,
  email: string,
  password: string,
}

export default class User {

  @observable users: UserInterface[] = []

  @observable loggedIn: boolean = true

  @observable fetchData: any = {email: "userInfo.pl", id: 24, username: "maikel"}

  @action addUser = (newUser: any) => {
    this.users.push(newUser)
  }

  @action signUp = async (username: string, email: string, password: string) => {
    await fetch("http://localhost:4000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password })
      }
    )
    .then(res => res.json())
    .then(data => {
      this.fetchData = data
    })
  }

  @action signIn = async (login: string, password: string) => {
    await fetch("http://localhost:4000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*"
        },
        credentials: 'include',
        body: JSON.stringify({ login, password })
      }
    )
    .then(res => res.json())
    .catch(err => alert(err))
    .then(data => {
      console.log(data)
      this.fetchData = data
    })
  }

  @action logMe = () => {
    console.log("MobX works!");
  }

}

const UserStore = new User()
export { UserStore }
