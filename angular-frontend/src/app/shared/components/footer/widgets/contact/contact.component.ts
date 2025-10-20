import { Component, Input } from '@angular/core';
import { Option } from '../../../../../shared/interface/theme-option.interface';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() data: Option | null;

  handleAppStoreLink(platform: string) {
    // For local development, prevent external app store navigation
    console.log(`${platform} link blocked for local development`);
  }

}
