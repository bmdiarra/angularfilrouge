import { ReferentielsComponent } from './referentiels/referentiels.component';
import { CompetencesComponent } from './groupes-competences/competences/competences.component';
import { GroupesCompetencesComponent } from './groupes-competences/groupes-competences.component';
import { PromosComponent } from './promos/promos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ProfilSortiesComponent } from './profil-sorties/profil-sorties.component';
import { ProfilsComponent } from './profils/profils.component';

const routes: Routes = [
  {path: 'promos', component: PromosComponent},
  {path: 'users', component: UsersComponent},
  {path: 'groupescompetences', component: GroupesCompetencesComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'profilssortie', component: ProfilSortiesComponent},
  {path: 'referentiels', component: ReferentielsComponent},
  {path: 'profils', component: ProfilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
