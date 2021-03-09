'use strict'

class CustomerController {
    test() {
        return "Hello Vietnam";
    }

    index({ view }) {
        const message = "Developed by Nhat Nguyen"
        return view.render('customer/customer', { message });
    }
}

module.exports = CustomerController
