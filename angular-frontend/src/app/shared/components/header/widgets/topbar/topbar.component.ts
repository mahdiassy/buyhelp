import { Component, Input } from '@angular/core';
import { Option } from '../../../../interface/theme-option.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @Input() data: Option | null;

  handleSellerRegistration() {
    // For local development, redirect to a local seller registration page
    // You can change this to your local seller registration route
    console.log('Seller registration clicked - staying local for development');
    // Optionally navigate to a local route:
    // this.router.navigate(['/auth/register'], { queryParams: { type: 'seller' } });
  }

}
