export interface VizualizationUiConfig {
  id: string;
  shape: string;
  height: string;
  width: string;
  showBody: boolean;
  fullScreen: boolean;
  showFilters: boolean;
  hideFooter: boolean;
  hideHeader: boolean;
  hideManagementBlock: boolean;
  hideTypeButtons: boolean;
  showInterpretionBlock: boolean;
  hideResizeButtons: boolean;
  hideDownloadBlock: boolean;
  showTitleBlock: boolean;
  visualizationTypesConfig: VisualizationTypesConfig;
}

export interface VisualizationTypesConfig {
  switchToMap: boolean;
  switchToTable: boolean;
  switchToInfo: boolean;
  enableLayoutChangeButton: boolean;
}
