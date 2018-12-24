const indicators = [
  {
    id: 'NY.GDP.MKTP.CD',
    name: 'GDP (current US$)',
    info: 'More is better',
    negative: false
  },
  {
    id: 'NY.GDP.MKTP.KD.ZG',
    name: 'GDP growth (annual %)',
    info: 'More is better',
    negative: false
  },
  {
    id: 'SI.POV.GINI',
    name: 'GINI index (World Bank estimate)',
    info: 'Less is better',
    negative: true
  },
  {
    id: 'SH.DYN.MORT',
    name: 'Mortality rate, under-5 (per 1,000 live births)',
    info: 'Less is better',
    negative: true,
  },
  {
    id: 'SI.DST.10TH.10',
    name: 'Income share held by highest 10%',
    info: 'Less is better',
    negative: true,
  },
  {
    id: 'SI.DST.FRST.10',
    name: 'Income share held by lowest 10%',
    info: 'More is better',
    negative: false
  }
];

export default indicators;
