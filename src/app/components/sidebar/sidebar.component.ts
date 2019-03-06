import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../http-interceptor/auth.service';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: RouteInfo[];
  showChildren?: boolean;
}
// {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: ''},
export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'داشبورد', icon: 'dashboard', class: ''},
  {path: '/inner/users/', title: 'کاربران', icon: 'people_outline', class: ''},
  // {path: '#', title: 'دسترسی ها', icon: 'vpn_key', class: ''},
  {path: '/inner/roles', title: 'نقش ها', icon: 'contacts', class: ''},
  {path: '/inner/web-page', title: 'صفحات', icon: 'find_in_page', class: ''},
  {path: '/inner/menu', title: 'منو ها', icon: 'menu', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  isMobileMenu() {
    if (window.screen.width > 991) {
      return false;
    }
    return true;
  }

  activateChild(item: RouteInfo) {
    item.showChildren = !item.showChildren;
  }

  logout() {
    this.authService.logout();
  }
}
