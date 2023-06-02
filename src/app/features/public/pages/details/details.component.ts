import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/core/services/properties.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private properties: PropertiesService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
  }
}
