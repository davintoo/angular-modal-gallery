/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselIe11Component } from './carousel-ie11/carousel-ie11.component';
import { PlainGalleryComponent } from './plain-gallery/plain-gallery.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule, OverlaycontentComponent } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselIe11Component,
    PlainGalleryComponent,
    ModalGalleryComponent,
    NavbarComponent,
    HomeComponent,
    IntroHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    GalleryModule.forRoot() // <-------------------------------------------- @ks89/angular-modal-gallery module import
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OverlaycontentComponent]
})
export class AppModule {}
