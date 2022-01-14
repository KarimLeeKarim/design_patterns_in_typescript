import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'purple';

  constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location = {
          lat: parseFloat(faker.address.latitude()),
          lng: parseFloat(faker.address.longitude()),
      }
  }

  markerCont(): string{
      return `
      <p>Company Name: <b>${this.companyName}</b></p>
      <p>Catch Phrase: <b>${this.catchPhrase}</b></p>
      `
  }
}