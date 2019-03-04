import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {MenuItemService} from './menu-item.service';
import {AdminUtilityService} from '../admin-utility/admin-utility.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: any;
  menuItemList: any;
  menuTreeList: any[];
  selectedMenuItem: any;
  horizontalMenuItems: any[];

  constructor(private commonService: CommonService,
              private menuItemService: MenuItemService,
              private adminUtility: AdminUtilityService) {

  }

  ngOnInit() {
    this.menuItem = new Object();
    this.menuTreeList = [];
    this.menuItemList = [];
    this.menuItemService.fetchAllMenus().subscribe(res => {
      this.menuItemList = res;
      console.log('123', res);
      this.menuTreeList = this.commonService.prepareTreeForMenuItemTree(res);
      this.horizontalMenuItems = [];
      this.menuTreeList.forEach(m => {
        this.horizontalMenuItems.push(Array.of(m));
      })
      console.log('tree', this.menuTreeList);
      // this.expandAll();
    }, error => {
      this.commonService.showErrorMessage(error);
    });
  }

  // expandAll() {
  //   this.menuTreeList.forEach( node => {
  //     this.expandRecursive(node, true);
  //   } );
  // }
  //
  // collapseAll() {
  //   this.menuTreeList.forEach( node => {
  //     this.expandRecursive(node, false);
  //   } );
  // }
  //
  // private expandRecursive(node: TreeNode, isExpand: boolean){
  //   node.expanded = isExpand;
  //   if (node.children){
  //     node.children.forEach( childNode => {
  //       this.expandRecursive(childNode, isExpand);
  //     } );
  //   }
  // }

  saveItem() {

  }

  clear() {

  }
}
