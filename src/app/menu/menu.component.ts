import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';
import {MenuItemService} from './menu-item.service';
import {AdminUtilityService} from '../admin-utility/admin-utility.service';
import {TreeNode} from 'primeng/api';
import {init} from 'protractor/built/launcher';
import {PermissionsService} from '../permissions/permissions.service';
import {WebPageService} from '../web-page/web-page.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: any;
  menuItemList: any[];
  menuTreeList: any[];
  selectedMenuItem: any;
  horizontalMenuItems: any[];
  permissionsList: any[];
  webPageList: any[];

  constructor(private commonService: CommonService,
              private menuItemService: MenuItemService,
              private adminUtility: AdminUtilityService,
              private permissionService: PermissionsService,
              private webPageService: WebPageService) {

  }

  ngOnInit() {
    this.menuItem = {};
    this.menuItem.data = {};
    this.menuTreeList = [];
    this.menuItemList = [];
    this.permissionService.findAllPermissions().subscribe(res => {
      this.permissionsList = res.data;
    }, error => {
      this.commonService.showErrorMessage(error);
    });
    this.webPageService.findAllPages().subscribe(res => {
      this.webPageList = res.data;
    }, error => {
      this.commonService.showErrorMessage(error);
    });
    this.menuItemService.fetchAllMenus().subscribe(res => {
      this.menuItemList = res;
      console.log('123', res);
      this.menuTreeList = this.commonService.prepareTreeForMenuItemTree(res);
      this.horizontalMenuItems = [];
      this.menuTreeList.forEach(m => {
        this.horizontalMenuItems.push(Array.of(m));
      });
      console.log('tree', this.menuTreeList);
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  saveItem() {
    this.menuItem.parentItem = new Object();
    this.menuItem.parentItem.id = this.selectedMenuItem.data.id;
    console.log('saving item', this.menuItem);
    this.menuItemService.saveMenuItem(this.menuItem).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت ذخیره شد');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  clear() {

    this.menuItem = new Object();
  }

  edit(rowData) {
    this.menuItemService.findById(rowData.id).subscribe(res => {
      this.menuItem = res;
      this.selectedMenuItem = null;
      if (this.menuItem.parentItem) {
        this.menuTreeList.forEach(m => {
          this.selectParent(m);
        });
      }
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  selectParent(item): boolean {
    const x = item.data.id === this.menuItem.parentItem.id;
    if (x) {
      this.selectedMenuItem = item;
      return true;
    } else {
      console.log(item.data.id, this.menuItem.parentItem.id);
      console.log(item.data.id === this.menuItem.parentItem.id);
      if (item.children) {
        for (const c of item.children) {
          return this.selectParent(c);
        }
      }
    }
  }

  delete(id: any) {
    this.menuItemService.deleteItem(id).subscribe(res => {
      this.commonService.showInfoMessage('با موفقیت انجام شذ');
      this.ngOnInit();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }
}
