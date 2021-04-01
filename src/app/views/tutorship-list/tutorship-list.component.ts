import { Component, OnInit } from '@angular/core';
import {TutorshipService} from '../../services/tutorship.service';
import {Tutorship} from '../../interfaces/tutorship';
import {MessageResponse} from '../../interfaces/message-response';
import {combineAll} from 'rxjs/operators';

@Component({
  selector: 'app-tutorship-list',
  templateUrl: './tutorship-list.component.html',
  styleUrls: ['./tutorship-list.component.css']
})
export class TutorshipListComponent implements OnInit {

  tutorship: Tutorship[];

  constructor(private tutorshipService: TutorshipService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.tutorshipService.getAll().
    subscribe({
      error: (err) => console.log(err),
      next: res => this.tutorship=res.data,
      complete: () => console.log("Completed")
    })

    console.log(this.tutorship);


    /*
    this.authSer)vice.signIn(this.loginForm.getRawValue())
      .subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res);
          this.setToken(res.data);
          this.authService.setIsLogged(true);
        },
        complete: () => console.log('Completado')
      });
     */
  }

}
