import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactSelected: User;

  contactsMap:      Map<string, User> = new Map<string, User>();  
  contactsArray:    User[] = new Array;

  includedByThis:       Map<string, User> = new Map<string, User>(); 
  includedByThisArray:  User[] = new Array;

  includedInAnother:      Map<string, User> = new Map<string, User>(); 
  includedInAnotherArray: User[] = new Array;
  
  constructor() {
    //Pueba: Lista de contactos de un usuario
    let user1 = new User("aa", "alex a");
    let user2 = new User("bb", "bola b");
    let user3 = new User("cc", "cassie");
    user1.cardsWishes.push(1);
    user2.cardsWishes.push(2);
    this.contactsMap.set("aa", user1);
    this.contactsMap.set("bb", user2);
    this.includedInAnother.set("cc", user3)
    this.contactsArray = this.buildArrayFromMap(this.contactsMap);
    this.includedByThisArray = this.buildArrayFromMap(this.includedByThis);
    this.includedInAnotherArray = this.buildArrayFromMap(this.includedInAnother);
   }

  searchContactIntoDB(nickname: string){
    //TODO
  }
  /*
  Incluye contact in a map para mantener en el orden alfabético y replica el mapa en su array
  */ 
  putContactInthisOwnlist(nickname: string): void {
    this.includedByThis.set(nickname, new User (nickname, nickname));    
    this.includedByThisArray = this.buildArrayFromMap(this.includedByThis);
  }

  /*
  * Include the contact that has asked to be in touch
  */
  putContactInBothList(): User[] {
    let user = this.contactSelected
    this.contactsMap.set(user.nickname, user);
    this.includedInAnother.delete(user.nickname)    
    this.contactsArray = this.buildArrayFromMap(this.contactsMap);    
    this.includedInAnotherArray = this.buildArrayFromMap(this.includedInAnother)
    return this.contactsArray
  }

  removeContact() {    
    let nickname = this.getContactSelected().nickname

    if (this.contactsMap.delete(nickname))
      this.contactsArray = this.buildArrayFromMap(this.contactsMap)
      else if (this.includedByThis.delete(nickname))
        this.includedByThisArray = this.buildArrayFromMap(this.includedByThis)
        else if (this.includedInAnother.delete(nickname))
          this.includedInAnotherArray = this.buildArrayFromMap(this.includedInAnother)
  }

  buildArrayFromMap(contactsMap: Map<string, User>): User[] {
    let contactsArrayNew: User[] = new Array;
    for (let user of contactsMap) {
      contactsArrayNew.push(user[1]);
    }
    return contactsArrayNew;
  }

  getContact(nickname: string): User {
    return this.contactsMap.get(nickname)
  }
   
  getContactSelected(): User{
    return this.contactSelected;
  }

  getContactsMap(): Map<string,User> {
    return this.contactsMap;
  }
  
  getContactsArray(): User[] {
    return this.contactsArray;
  }

  getIncludedByThisArray(): User[] {
    return this.includedByThisArray
  }

  getIncludedInAnotherArray(): User[] {
    return this.includedInAnotherArray
  }
}
