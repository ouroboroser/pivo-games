interface IAuth {
  str1: number;
  username: string;
  password: string;
  Test: (number) => number;
  Login: (username: string, password:string) => void;
  
}

export class Auth implements IAuth {
  str1: number;
  username: string;
  password: string;

  constructor(_str1: number, _username: string, _password: string) {
    this.str1 = _str1;
    this.username = _username;
    this.password = _password;
  }

  Test(str1: number) {
    return str1 * 2;
  }

  Login(username: string, password: string) {
    console.log('Name: ', username);
    console.log('Password: ', password);
  }


}