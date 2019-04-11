export interface VisualizationLayer {
  config: Config;
  analytics: Analytics;
}

export interface Analytics {
  headers: Header[];
  metaData: MetaData;
  rows: Array<string[]>;
}

export interface Header {
  name: Name;
  column: ColumnEnum;
  valueType: string;
  type: string;
  hidden: boolean;
  meta: boolean;
}

export enum ColumnEnum {
  Data = 'Data',
  Group = 'Group',
  OrganisationUnit = 'Organisation unit',
  Period = 'Period',
  Value = 'Value'
}

export enum Name {
  Dx = 'dx',
  Groups = 'groups',
  Ou = 'ou',
  PE = 'pe',
  Value = 'value'
}

export interface MetaData {
  names: Names;
  dx: string[];
  pe: string[];
  ou: string[];
  co: any[];
  groups: string[];
}

export interface Names {
  [id: string]: string;
}

export interface Config {
  id: string;
  name: string;
  rows: Row[];
  type: string;
  columns: ColumnElement[];
  filters: Filter[];
  legendSet: LegendSet;
  spatialSupport: boolean;
  visualizationType: string;
  displayName: string;
  analyticsIdentifier: string;
  layer: string;
}

export interface ColumnElement {
  name: ColumnEnum;
  items: ColumnItem[];
  groups: any[];
  layout: string;
  dimension: Name;
  legendSet: string;
  optionSet: null;
}

export interface ColumnItem {
  id: string;
  name: string;
  type: string;
}

export interface Filter {
  dimension: Name;
  items: FilterItem[];
}

export interface FilterItem {
  id: string;
  dimensionItemType: string;
  displayName: string;
  dimensionItem: string;
}

export interface LegendSet {
  id: string;
  name: string;
  legends: Legend[];
}

export interface Legend {
  id: string;
  color: string;
  endValue: number;
  startValue: number;
  name?: string;
}

export interface Row {
  dimension: Name;
  items: RowItem[];
}

export interface RowItem {
  id: string;
  name: string;
  type?: string;
  legendSet?: LegendSet;
}
