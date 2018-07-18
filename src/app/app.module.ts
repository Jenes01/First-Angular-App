import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsService } from './services/skills.service';
import { ContactscomponentComponent } from './contactscomponent/contactscomponent.component';

import { ContactsService } from './services/contacts.service';
import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, ContactscomponentComponent, GreetingComponent, ContactFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [SkillsService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
