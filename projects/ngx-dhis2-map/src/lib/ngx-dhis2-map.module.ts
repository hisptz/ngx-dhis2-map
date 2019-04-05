import { NgModule, Input } from '@angular/core';
import { NgxDhis2MapComponent } from './ngx-dhis2-map.component';

@NgModule({
  declarations: [NgxDhis2MapComponent],
  imports: [],
  exports: [NgxDhis2MapComponent]
})
export class NgxDhis2MapModule {
  @Input() id;
  @Input() visualizationLayers: any;
  @Input() visualizationConfig: any;
  @Input() visualizationUiConfig: any;
}
