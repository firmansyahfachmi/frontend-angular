import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideosComponent } from './videos/videos.component';
import { ActivityComponent } from './activity/activity.component';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';
import { ChannelsComponent } from './channels/channels.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    VideosComponent,
    ActivityComponent,
    PeopleComponent,
    DocumentsComponent,
    ChannelsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
