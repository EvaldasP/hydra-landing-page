import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public readonly links = [
    'About',
    'Services',
    'Technologies',
    'How To',
    'Join Hydra',
  ];

  public readonly docs = ['F.A.Q', 'Sitemap', 'Conditions', 'Licenses'];

  public readonly icons = [
    { icon: 'icons/facebook.png', link: 'https://www.facebook.com' },
    { icon: 'icons/twitter.png', link: 'www.x.com' },
    { icon: 'icons/linkedin.png', link: 'www.linkedin.com' },
    { icon: 'icons/youtube.png', link: 'www.youtube.com' },
    { icon: 'icons/instagram.png', link: 'www.instagram.com' },
    { icon: 'icons/pinterest.png', link: 'www.pinterest.com' },
  ];
}
