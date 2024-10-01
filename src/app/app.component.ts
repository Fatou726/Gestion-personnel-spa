import { Component } from '@angular/core';
import { ListeDirectionComponent } from './components/liste-direction/liste-direction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeDirectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
}
