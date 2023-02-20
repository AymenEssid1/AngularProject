import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id!: number
  constructor(private route:ActivatedRoute) { } //pour recuperer l id (hatyt service:activatedRoute)

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']   //baad nmchy ll html nhotou bch tsyrlou l affichage
  }

}
