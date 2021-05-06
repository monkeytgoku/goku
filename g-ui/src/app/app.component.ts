import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'g-ui';

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
    // define your translations manually with setTranslation
    this.translate.setTranslation('en', {
      Hello: 'Hello {{value}}'
    });

    this.translate
      .get('Hello', { value: 'world' })
      .subscribe((res: string) => {
        console.log(res);
      });
  }
}
