import axios from 'axios';

const apiUrl = 'http://35.233.79.129/game';

interface Games {
  name: string;
  selectOption(topic: string, level: string, questins: number): Promise<any>;
}

export class Millionaire implements Games {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  async selectOption(topic: string, level: string, questions: number): Promise<any> {
      return await axios.get(`${apiUrl}/millionaire?topic=${topic}&diffculty=${level}&questions=${questions}`)
  }
}
