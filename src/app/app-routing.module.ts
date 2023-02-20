import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import {AddproductComponent} from "./addproduct/addproduct.component";

const routes: Routes = [      //table
  {path:'', redirectTo :'home' , pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'product/:id',component:DetailProductComponent},     //route parametré
  {path:'home', component:HomeComponent },
  {path: 'addProduct', component:AddproductComponent},
  //{path:'offres', component:OffreEmploiComponent},    hedhy naamlha kn jyt khdmt l offre emploi aamltha hne ama ena khadmtha f projet whdha
  {path:'**', component:NotfoundComponent}  //**: yaani autr que les pages l aandy    / w dima l path mt3 l notfound lzm ykoun melekhrrr blkoll : (tjy fl les examens) / lzm tjy flkhr bch yakra les liens lmloul sea

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
