import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hisptz-ngx-dhis2-map',
  templateUrl: './ngx-dhis2-map.component.html',
  styleUrls: ['./ngx-dhis2-map.component.scss']
})
export class NgxDhis2MapComponent implements OnInit {
  @Input() id;
  @Input() visualizationLayers: any;
  @Input() visualizationConfig: any;
  @Input() visualizationUiConfig: any;
  constructor() {}

  ngOnInit() {}
}
