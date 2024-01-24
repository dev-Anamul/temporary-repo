import axios, { AxiosResponse } from "axios";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
  [key: string]: any;
}



export class User {
  
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  

  async fetch(): Promise<void> {
    const reponse: AxiosResponse = await axios.post(
      `http://localhost:3500/users/${this.get("id")}`
    );
    this.set(reponse.data);
  }

  async save(): Promise<void> {
    const id = this.get("id");
    if (id) {
      await axios.put(`http://localhost:3500/users/${id}`, this.data);
    } else {
      await axios.post(`http://localhost:3500/users`, this.data);
    }
  }
}
