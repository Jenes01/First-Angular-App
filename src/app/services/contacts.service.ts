import { Contact} from '../models/contact';
import { Injectable } from '@angular/core';
import { ContactscomponentComponent } from '../contactscomponent/contactscomponent.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contact: Contact[] = [
    {
      name: 'Jay Miles',
      phoneNumber: 555-555-5555,
      email: 'Jay_M@yahoo.com'
    },
    {
      name: 'Tai Hamilton',
      phoneNumber: 222-333-4444,
      email: 'Tai1H@gmail.com'
    },
    {
      name: 'Kenya Perry',
      phoneNumber: 612-111-2233,
      email: 'Kenya_Perry@hotmail.com'
    }
  ];

  getContact = (): Observable<Contact[]> => {
    return of (this.contact);
  };
}
