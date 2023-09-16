// sidebar.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidebarItem } from './sidebar-item.model';

@Injectable({
    providedIn: 'root'
})

export class SidebarService {
  getSidebarItems(): Observable<SidebarItem[]> {
    // Implement fetching or providing your data here
    // For simplicity, using a static data array here
    return of([
      { id: 1, label: 'Dashboard', iconClass: 'fa fa-tachometer' },
      {
        id: 2,
        label: 'Users',
        iconClass: 'fa fa-users',
        children: [
          { 
            id: 21,
            label: 'List',
            iconClass: 'fa fa-list', 
            children: [
                { id: 211, label: 'Providers', iconClass: 'fa fa-list' },
                { id: 212, label: 'Admins', iconClass: 'fa fa-user-circle-o' }
              ]
          },
          { id: 22, label: 'Add User', iconClass: 'fa fa-user-plus' }
        ]
      },
      {
        id: 3,
        label: 'Products',
        iconClass: 'fa fa-shopping-cart',
        children: [
          { id: 31, label: 'All Products', iconClass: 'fa fa-box' },
          { id: 32, label: 'Add Product', iconClass: 'fa fa-plus' }
        ]
      }
    ]);
  }
}
