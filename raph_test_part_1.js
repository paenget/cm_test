const ChartMogul = require('chartmogul-node');
const config = new ChartMogul.Config('fdb60236bbd921ae4a38a1c730f862ee', '91afca0b149c4041a464356c6a374998');

var customers = []

ChartMogul.Customer.all(config)
    .then(res => {
        customers = res.entries
        // console.log(customers);
    })
    .then(res => {
        let i;
        for (i = 0; i < customers.length; i++) {
            if (i <= 3) {
                updateCustomer(customers, i, 'Bill Gates');
            }
            if (i > 3 && i < 5) {
                updateCustomer(customers, i, 'Tim Cook');
            }
            if (i >= 5 && i < 8) {
                updateCustomer(customers, i, 'Steve Jobs');
            }
            if (i >= 8 && i < 11) {
                updateCustomer(customers, i, 'Larry Ellison');
            }
        }
    })
    .catch(e => console.error(e.message, e.httpStatus, e.response));


//Update sales lead for customer 1-3

function updateCustomer(customers, i, salesLead) {
    var customerUuid = customers[i].uuid;

      ChartMogul.CustomAttribute.add(config, customerUuid, {
        'custom': [
          {'type': 'String', 'key': 'Sales_Lead', 'value': salesLead}
        ]
      });
}




