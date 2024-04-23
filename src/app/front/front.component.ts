import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})

export class FrontComponent {

}

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e: Event) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
  });
});


