import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css'],
  providers: [MessageService]
})
export class CancelarComponent implements OnInit {

  public responseData: any;
  navigationSubscription;
  datos: boolean;
  constructor(private route: ActivatedRoute,  private router: Router,
    private messageService: MessageService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    this.getTransaction(localStorage.getItem('requestId'));
  }
  ngOnInit() {
  }

  getTransaction(id) {
    if (id) {
    }

  }

}
