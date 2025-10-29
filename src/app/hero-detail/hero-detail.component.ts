import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';
import { ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-hero-detailCoponent',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})

export class HeroDetailComponent {
  @Input() hero?: Hero;
}
