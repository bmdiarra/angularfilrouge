import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ItemUserComponent } from './users/list-users/item-user/item-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { GroupesCompetencesComponent } from './groupes-competences/groupes-competences.component';
import { ListeCompetencesComponent } from './groupes-competences/competences/liste-competences/liste-competences.component';
import { ItemCompetenceComponent } from './groupes-competences/competences/liste-competences/item-competence/item-competence.component';
import { AddGroupeComptencesComponent } from './groupes-competences/add-groupe-comptences/add-groupe-comptences.component';
import { CompetencesComponent } from './groupes-competences/competences/competences.component';
import { AddCompetenceComponent } from './groupes-competences/competences/add-competence/add-competence.component';
import { ProfilsComponent } from './profils/profils.component';
import { ListProfilsComponent } from './profils/list-profils/list-profils.component';
import { AddProfilComponent } from './profils/add-profil/add-profil.component';
import { PromosComponent } from './promos/promos.component';
import { ProfilSortiesComponent } from './profil-sorties/profil-sorties.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListUsersComponent,
    ItemUserComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    GroupesCompetencesComponent,
    ListeCompetencesComponent,
    ItemCompetenceComponent,
    AddGroupeComptencesComponent,
    CompetencesComponent,
    AddCompetenceComponent,
    ProfilsComponent,
    ListProfilsComponent,
    AddProfilComponent,
    PromosComponent,
    ProfilSortiesComponent,
    ReferentielsComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
