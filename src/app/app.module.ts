import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { AuthProvider } from '../providers/auth/auth';

export const config = {
    apiKey: "AIzaSyCfhMtKkY-H7DHKTCNiYs2AVNroXQz7M6A",
    authDomain: "mytown-7a1f4.firebaseapp.com",
    databaseURL: "https://mytown-7a1f4.firebaseio.com",
    projectId: "mytown-7a1f4",
    storageBucket: "mytown-7a1f4.appspot.com",
    messagingSenderId: "1038079560474"
};

@NgModule({
    declarations: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        IonicModule.forRoot(ConferenceApp, {}, {
            links: [
                { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
                { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
                { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
                { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
                { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                { component: MapPage, name: 'Map', segment: 'map' },
                { component: AboutPage, name: 'About', segment: 'about' },
                { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
                { component: SupportPage, name: 'SupportPage', segment: 'support' },
                { component: LoginPage, name: 'LoginPage', segment: 'login' },
                { component: AccountPage, name: 'AccountPage', segment: 'account' },
                { component: SignupPage, name: 'SignupPage', segment: 'signup' }
            ]
        }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConferenceData,
        UserData,
        InAppBrowser,
        AuthProvider,
        SplashScreen
    ]
})
export class AppModule { }
