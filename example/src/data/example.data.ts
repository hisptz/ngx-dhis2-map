export const layers = [
  {
    config: {
      id: 'F7RHgKtPhYf_0',
      name: 'Availability of Vitamin A - 2018',
      rows: [
        {
          dimension: 'dx',
          items: [
            {
              id: 'ME1me1HHvyA',
              name: 'Availability of Vitamin A',
              legendSet: {
                id: 'ME1me1HHvyA',
                name: 'Availability of Vitamin A',
                legends: [
                  {
                    id: '2ht3UvUFz3e',
                    name: 'Red',
                    color: '#ff2d2d',
                    endValue: 50,
                    startValue: 0
                  },
                  {
                    id: 'SU6gqdzi8Te',
                    name: 'Yellow',
                    color: '#edff08',
                    endValue: 70,
                    startValue: 51
                  },
                  {
                    id: '7bOj7IIerKr',
                    name: 'Green',
                    color: '#08c664',
                    endValue: 100,
                    startValue: 71
                  }
                ]
              }
            }
          ]
        }
      ],
      type: 'COLUMN',
      columns: [
        {
          name: 'Organisation unit',
          items: [
            {
              id: 'USER_ORGUNIT_GRANDCHILDREN',
              name: 'User sub-x2-units',
              type: 'USER_ORGANISATION_UNIT'
            }
          ],
          groups: [],
          layout: 'columns',
          dimension: 'ou',
          legendSet: '',
          optionSet: null
        }
      ],
      filters: [
        {
          dimension: 'pe',
          items: [
            {
              id: '2018',
              dimensionItemType: 'PERIOD',
              displayName: '2018',
              dimensionItem: '2018'
            }
          ]
        }
      ],
      legendSet: {
        id: 'FhW8Ty2sUV2',
        name: 'Default',
        legends: [
          {
            id: 'zFPIcc1k4IW',
            color: '#FF0000',
            endValue: 34,
            startValue: 0
          },
          {
            id: 'hMeRYCK7NZw',
            color: '#FFFF00',
            endValue: 67,
            startValue: 34
          },
          {
            id: 'G5LQ4TZLwyG',
            color: '#008000',
            endValue: 100,
            startValue: 67
          }
        ]
      },
      spatialSupport: true,
      visualizationType: 'REPORT_TABLE',
      displayName: 'Availability of Vitamin A - 2018',
      analyticsIdentifier: 'ME1me1HHvyA_2018',
      layer: 'thematic'
    },
    analytics: {
      headers: [
        {
          name: 'dx',
          column: 'Data',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'ou',
          column: 'Organisation unit',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'pe',
          column: 'Period',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'value',
          column: 'Value',
          valueType: 'NUMBER',
          type: 'java.lang.Double',
          hidden: false,
          meta: false
        },
        {
          name: 'groups',
          column: 'Group',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        }
      ],
      metaData: {
        names: {
          2018: '2018',
          dx: 'Indicator',
          ME1me1HHvyA: 'Availability of Vitamin A',
          ou: 'Organisation unit',
          Hq1ZHMHGvQE: 'Bird District',
          P8hBn1kPPau: 'Cat District',
          U51HyyjrIjK: 'Dog District',
          I33odCYFs58: 'Fish District',
          RFAMBnKbnZe: 'Game District',
          R7TPl8q81Ft: 'Insect District',
          vUamP5PpJsx: 'Dessert District',
          WZBBfmci0Hi: 'Dinner District',
          LpDbqIl6guV: 'Fruit District',
          XBfo4qN05fj: 'Staple District',
          Ffm4RpW79MF: 'Sweet District',
          qo2afflttVq: 'Vegetable District',
          pe: 'Period',
          groups: 'Determinant',
          gMBbWj0ti27: 'Commodities',
          cH7F1WrsMba: 'Human Resources',
          k1ZoaGAFVL3: 'Geographic Accessibility',
          sY3S9lyvgnx: 'Initial Utilisation',
          Zb8rG5RD91g: 'Continuous Utilisation',
          lvOXDYaW7hB: 'Effective Coverage'
        },
        dx: ['ME1me1HHvyA'],
        pe: ['2018'],
        ou: [
          'Hq1ZHMHGvQE',
          'P8hBn1kPPau',
          'U51HyyjrIjK',
          'I33odCYFs58',
          'RFAMBnKbnZe',
          'R7TPl8q81Ft',
          'vUamP5PpJsx',
          'WZBBfmci0Hi',
          'LpDbqIl6guV',
          'XBfo4qN05fj',
          'Ffm4RpW79MF',
          'qo2afflttVq'
        ],
        co: [],
        groups: ['gMBbWj0ti27', 'cH7F1WrsMba', 'k1ZoaGAFVL3', 'sY3S9lyvgnx', 'Zb8rG5RD91g', 'lvOXDYaW7hB']
      },
      rows: [
        ['ME1me1HHvyA', 'Hq1ZHMHGvQE', '2018', '57.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'P8hBn1kPPau', '2018', '60.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'U51HyyjrIjK', '2018', '52.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'I33odCYFs58', '2018', '62.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'RFAMBnKbnZe', '2018', '60.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'R7TPl8q81Ft', '2018', '40.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'vUamP5PpJsx', '2018', '53.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'WZBBfmci0Hi', '2018', '57.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'LpDbqIl6guV', '2018', '53.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'XBfo4qN05fj', '2018', '43.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'Ffm4RpW79MF', '2018', '53.0', 'gMBbWj0ti27'],
        ['ME1me1HHvyA', 'qo2afflttVq', '2018', '47.0', 'gMBbWj0ti27']
      ]
    }
  },
  {
    config: {
      id: 'F7RHgKtPhYf_1',
      name: 'Availability of Trained VAS Providers - 2018',
      rows: [
        {
          dimension: 'dx',
          items: [
            {
              id: 'NMVneMJGt5B',
              name: 'Availability of Trained VAS Providers'
            }
          ]
        }
      ],
      type: 'COLUMN',
      columns: [
        {
          name: 'Organisation unit',
          items: [
            {
              id: 'USER_ORGUNIT_GRANDCHILDREN',
              name: 'User sub-x2-units',
              type: 'USER_ORGANISATION_UNIT'
            }
          ],
          groups: [],
          layout: 'columns',
          dimension: 'ou',
          legendSet: '',
          optionSet: null
        }
      ],
      filters: [
        {
          dimension: 'pe',
          items: [
            {
              id: '2018',
              dimensionItemType: 'PERIOD',
              displayName: '2018',
              dimensionItem: '2018'
            }
          ]
        }
      ],
      legendSet: {
        id: 'FhW8Ty2sUV2',
        name: 'Default',
        legends: [
          {
            id: 'zFPIcc1k4IW',
            color: '#FF0000',
            endValue: 34,
            startValue: 0
          },
          {
            id: 'hMeRYCK7NZw',
            color: '#FFFF00',
            endValue: 67,
            startValue: 34
          },
          {
            id: 'G5LQ4TZLwyG',
            color: '#008000',
            endValue: 100,
            startValue: 67
          }
        ]
      },
      spatialSupport: true,
      visualizationType: 'REPORT_TABLE',
      displayName: 'Availability of Trained VAS Providers - 2018',
      analyticsIdentifier: 'NMVneMJGt5B_2018',
      layer: 'thematic'
    },
    analytics: {
      headers: [
        {
          name: 'dx',
          column: 'Data',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'ou',
          column: 'Organisation unit',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'pe',
          column: 'Period',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        },
        {
          name: 'value',
          column: 'Value',
          valueType: 'NUMBER',
          type: 'java.lang.Double',
          hidden: false,
          meta: false
        },
        {
          name: 'groups',
          column: 'Group',
          valueType: 'TEXT',
          type: 'java.lang.String',
          hidden: false,
          meta: true
        }
      ],
      metaData: {
        names: {
          2018: '2018',
          dx: 'Indicator',
          NMVneMJGt5B: 'Availability of Trained VAS Providers',
          ou: 'Organisation unit',
          Hq1ZHMHGvQE: 'Bird District',
          P8hBn1kPPau: 'Cat District',
          U51HyyjrIjK: 'Dog District',
          I33odCYFs58: 'Fish District',
          RFAMBnKbnZe: 'Game District',
          R7TPl8q81Ft: 'Insect District',
          vUamP5PpJsx: 'Dessert District',
          WZBBfmci0Hi: 'Dinner District',
          LpDbqIl6guV: 'Fruit District',
          XBfo4qN05fj: 'Staple District',
          Ffm4RpW79MF: 'Sweet District',
          qo2afflttVq: 'Vegetable District',
          pe: 'Period',
          groups: 'Determinant',
          gMBbWj0ti27: 'Commodities',
          cH7F1WrsMba: 'Human Resources',
          k1ZoaGAFVL3: 'Geographic Accessibility',
          sY3S9lyvgnx: 'Initial Utilisation',
          Zb8rG5RD91g: 'Continuous Utilisation',
          lvOXDYaW7hB: 'Effective Coverage'
        },
        dx: ['NMVneMJGt5B'],
        pe: ['2018'],
        ou: [
          'Hq1ZHMHGvQE',
          'P8hBn1kPPau',
          'U51HyyjrIjK',
          'I33odCYFs58',
          'RFAMBnKbnZe',
          'R7TPl8q81Ft',
          'vUamP5PpJsx',
          'WZBBfmci0Hi',
          'LpDbqIl6guV',
          'XBfo4qN05fj',
          'Ffm4RpW79MF',
          'qo2afflttVq'
        ],
        co: [],
        groups: ['gMBbWj0ti27', 'cH7F1WrsMba', 'k1ZoaGAFVL3', 'sY3S9lyvgnx', 'Zb8rG5RD91g', 'lvOXDYaW7hB']
      },
      rows: [
        ['NMVneMJGt5B', 'Hq1ZHMHGvQE', '2018', '53.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'P8hBn1kPPau', '2018', '57.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'U51HyyjrIjK', '2018', '58.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'I33odCYFs58', '2018', '50.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'RFAMBnKbnZe', '2018', '58.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'R7TPl8q81Ft', '2018', '60.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'vUamP5PpJsx', '2018', '57.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'WZBBfmci0Hi', '2018', '52.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'LpDbqIl6guV', '2018', '47.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'XBfo4qN05fj', '2018', '53.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'Ffm4RpW79MF', '2018', '43.0', 'cH7F1WrsMba'],
        ['NMVneMJGt5B', 'qo2afflttVq', '2018', '37.0', 'cH7F1WrsMba']
      ]
    }
  }
];
export const config = {
  id: 'iUkeQpAznlw',
  type: 'REPORT_TABLE',
  contextPath: 'https://scorecard-dev.dhis2.org/demo',
  currentType: 'MAP'
};

export const UiConfig = {
  id: 'iUkeQpAznlw',
  shape: 'FULL_WIDTH',
  height: '450px',
  width: 'span 12',
  showBody: true,
  fullScreen: false,
  showFilters: false,
  hideFooter: false,
  hideHeader: false,
  hideManagementBlock: true,
  hideTypeButtons: false,
  showInterpretionBlock: true,
  hideResizeButtons: false,
  hideDownloadBlock: false,
  showTitleBlock: false,
  visualizationTypesConfig: {
    switchToMap: true,
    switchToTable: true,
    switchToInfo: true,
    enableLayoutChangeButton: true
  }
};
