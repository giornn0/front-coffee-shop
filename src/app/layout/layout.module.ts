import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent, IndexComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent],
})
export class LayoutModule { }
