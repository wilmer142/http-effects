import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadUser } from '../../store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new LoadUser(id));
    })
  }

}
