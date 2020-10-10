const ChartMogul = require('chartmogul-node');
const config = new ChartMogul.Config('fdb60236bbd921ae4a38a1c730f862ee', '91afca0b149c4041a464356c6a374998');

ChartMogul.Metrics.mrr(config, {
    'start-date': '2019-01-01',
    'end-date': '2019-04-30',
    'interval': 'month'
 }, function (err, res) {
     mrrList = res.entries
     console.log(`Total MRR for Q1 2019 
     \nJanuary: $${mrrList[0].mrr}
     \nFebruary: $${mrrList[1].mrr}
     \nMarch: $${mrrList[2].mrr}
     \nApril: $${mrrList[3].mrr}
     `)  
 });
 