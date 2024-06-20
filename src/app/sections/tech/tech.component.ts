import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechComponent {
  public readonly componies = [
    'tech/unreal.png',
    'tech/unity.png',
    'tech/oculus.png',
    'tech/vive.png',
  ];
}
