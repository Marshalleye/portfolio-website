import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HeaderComponent {
  @Input() title: 'home' | 'project' | 'info' = 'home';
}
