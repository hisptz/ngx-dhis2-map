import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { VisualizationConfig, VisualizationLayer, VizualizationUiConfig } from './models';

@Component({
  selector: 'hisptz-ngx-dhis2-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ngx-dhis2-map.component.html',
  styleUrls: ['./ngx-dhis2-map.component.scss']
})
export class NgxDhis2MapComponent implements OnInit {
  @Input() visualizationConfig: VisualizationConfig;
  @Input() visualizationLayers: VisualizationLayer[];
  @Input() visuzalizationUiConfig: VizualizationUiConfig;
  @Input() id: string;
  @Input() isLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
