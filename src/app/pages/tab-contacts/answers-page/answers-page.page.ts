import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'answers-page',
  templateUrl: './answers-page.page.html',
  styleUrls: ['./answers-page.page.scss'],
})
export class AnswersPage implements OnInit {

  constructor(
    private router: Router,
    public contactsService: ContactsService) { }

  ngOnInit() {
  }

  viewAnswers() {
    this.router.navigate(['tabs/subtab-contacts/answers/view-answers'])
  }

}
