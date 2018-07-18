import { Contact } from '../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contactscomponent',
  templateUrl: './contactscomponent.component.html',
  styleUrls: ['./contactscomponent.component.css']
})
export class ContactscomponentComponent implements OnInit {
  contact: Contact [];
  dataService: ContactsService;
  
  constructor(private contactsService: ContactsService) {
    this.dataService = this.contactsService;
  }
  
  ngOnInit(): void {
      this.dataService.getContact().subscribe(contact => this.contact = contact);
  }

}
