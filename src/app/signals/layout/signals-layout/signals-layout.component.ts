import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SideMenuComponent],
  templateUrl: './signals-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsLayoutComponent {}
