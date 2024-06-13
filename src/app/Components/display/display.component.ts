import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CustomDirective } from '../custom/custom.directive';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,LoginComponent,CustomDirective],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  bool=true;
}
