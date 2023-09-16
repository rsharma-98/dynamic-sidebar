// sidebar.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { SidebarItem } from './sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarItems: SidebarItem[] = [];
  @Input() depth: number = 0; // Add depth tracking

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    if (this.sidebarItems.length === 0) {
      this.sidebarService.getSidebarItems().subscribe(items => {
        this.sidebarItems = items;
      });
    }
  }

  toggleSubMenu(item: SidebarItem): void {
    item.expanded = !item.expanded;
  }
  
  // Add a base case to terminate recursion
  shouldRenderSubmenu(item: SidebarItem): boolean {
    // You can adjust the depth limit as needed
    const depthLimit = 3;

    let shouldRender: boolean;
    shouldRender = item.children && this.depth < depthLimit || false;

    return shouldRender;
  }
}
