import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SideItemComponent } from './sidenav/side-item.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    IndexComponent,
    SideItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
})
export class LayoutModule { }
