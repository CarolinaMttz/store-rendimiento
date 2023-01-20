import { Component , PLATFORM_ID, Inject} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private ruoter: Router,
    @Inject(PLATFORM_ID) private platfomrId: any
  ){

    if( isPlatformBrowser(this.platfomrId) ){
          const  navEndEvent$ = this.ruoter.events
                                .pipe(
                                    filter( event => event instanceof NavigationEnd)
                                );
          navEndEvent$.subscribe( (event: NavigationEnd) => {
            gtag('config', 'G-3EDX31KQ83',{
              page_path: event.urlAfterRedirects
            });
          });
    }
  }
}
