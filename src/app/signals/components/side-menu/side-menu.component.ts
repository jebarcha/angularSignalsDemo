import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: `
    li {
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'counter', route: 'counter' },
    { title: 'User', route: 'user-info' },
    { title: 'Mutations', route: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   { title: 'counter', route: 'counter' },
  //   { title: 'User', route: 'user-info' },
  //   { title: 'Mutations', route: 'properties' },
  // ];
}
