const incomeType = [
  {label: 'PAYE/Salary', value: '1'},
  {label: 'NZ Interest', value: '2'},
  {label: 'COVID-19 Wage subsidy', value: '3'},
  {label: 'NZ Dividends', value: '4'},
  {label: 'Investment Property', value: '5'},
  {label: 'Income earned outside NZ', value: '6'},
  {label: 'Shareholder-employee salary with no tax deducted', value: '7'},
  {
    label: 'Short-term rental of primary residence (AirBnB, Lodger etc)',
    value: '8',
  },
  {label: 'Partnership income', value: '9'},
  {label: 'Look through company income (LTC)', value: '10'},
  {label: 'NZ Estate or trust income', value: '11'},
  {label: 'Maori Authority distributions', value: '12'},
  {label: 'Other (e.g. sales of shares)', value: '13'},
];

export const ird = [
  {label: 'IRD', value: 'IRD'},
  {label: 'Manual', value: 'manual'},
];

export default incomeType;
