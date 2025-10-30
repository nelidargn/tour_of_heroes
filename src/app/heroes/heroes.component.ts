import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';


@Component({
  standalone: true,
  selector: 'app-heroesComponent',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
],
})

export class HeroesComponent {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}