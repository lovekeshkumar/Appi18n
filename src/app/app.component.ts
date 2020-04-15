import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appi18n';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'zh-ch', label: 'Chinese' },
    { code: 'es', label: 'Espanol' }
  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}
