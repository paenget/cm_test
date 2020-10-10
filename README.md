# cm_test

**Part 2**

**1) I would like to add the sales person that closed a deal to a customer profile in ChartMogul so that I can
filter by this value. Should I bring this in as an attribute or tag? Is there an automated way to do this or do
I need to push this data in manually?**


Hey Homer,

We're glad you love the product and I would be happy to help you out here. If you want to sales person data into the platform, you can our customer attributes to add and update those value which you can then use as filters for your charts. Here's a link to the [documentation](https://dev.chartmogul.com/reference#retrieve-customers-attributes)

**2) Another issue I had is that I can’t wrap my head around how proration works in ChartMogul.**

**Here is my scenario:**

**- My customer is on a monthly plan called Pro plan that costs $60 which they paid for on November 1st at 3:23 pm.**

**- On November 10th at 8:30pm they are upgrading to an Enterprise plan that costs $100. How do I compute the invoice amount so the MRR for the upgrade to Enterprise plan is computed properly? Do you have any documentation about this?**


Hey Homer,

Happy to help you understand what proration is for you. So basically proration is just an adjustment to the payment so that your user does not pay for "unused" services. Now in your case your customer in the Pro plan ($60) only used up a little more than 9 days (off by a few hours). So a prorated rate of that would be dividing $60 by the total number of days of November which is 30 and multiplied by the days used. So we get $18. Now to handle the fee for the upgrade we do the same thing. That's $100 divided by 30 days multiplied by the remaining days left for November. You will get $69.99. So in total you will charge the customer $87.99.

As for documentation please refer to this [link](https://dev.chartmogul.com/docs/adding-prorated-invoices-using-the-import-api)
