import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroContactsComponent } from './components/hero-contacts/hero-contacts.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavigationComponent, HeroContactsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
