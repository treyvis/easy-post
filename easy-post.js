const Easypost = require('node-easypost');
const api = new Easypost('UHk0rNTF3DeRs9oMVnhnHA');

const fromAddress = new api.Address({
  company: 'R&R BBQ',
  street1: '436 North Cabela\'s Drive',
  street2: 'Suite 102',
  city: 'Farmington',
  state: 'UT',
  zip: '84025'
});

fromAddress.save().then();

const toAddress = new api.Address({
  company: 'Smitty\'s',
  street1: '645 W Broadway St',
  city: 'Idaho Falls',
  state: 'ID',
  zip: '83402'
});

toAddress.save().then();

const parcel = new api.Parcel({
  length: 8,
  width: 4,
  height: 4,
  weight: 8
});

parcel.save().then();

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel
});

shipment.save().then(res => {
  shipment.buy(shipment.lowestRate(['USPS'], ['First'])).then(console.log);
});


