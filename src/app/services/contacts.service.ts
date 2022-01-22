import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsMap: Map<string, User> = new Map<string, User>();
  contactSelected: User;
  contactsArray: User[] = new Array;
  
  constructor() {
    //Pueba: Lista de contactos de un usuario
    this.contactsMap.set("aa", new User("aa", "alex a"));
    this.contactsMap.set("bb", new User("bb", "bola b"));
    this.contactsArray.push(this.contactsMap.get("aa"));
    this.contactsArray.push(this.contactsMap.get("bb"));
   }

  searchContactIntoDB(nickname: string){
    //TODO
  }
  /*
  Incluye contact in a map para el orden alfabético y búsqueda
  y lo referencia en un Array utilizado en algunas clases
  */ 
  setContact(nickname: string): void {
    this.contactsMap.set(nickname, new User("nickname",""))
    this.contactsArray.push(this.contactsMap.get(nickname));
  }
   
  getContact(): User{
    return this.contactSelected;
  }

  getContactsMap(): Map<string,User> {
    return this.contactsMap;
  }
  
  getContactsArray(): User[] {
    return this.contactsArray;
  }
}
