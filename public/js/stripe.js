/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51HWQbXDs3AXkRbkaXYsKkYvRjFAWUc6ZPQrfCEU4PwVGdqztu1fU4mJmUZ91sqHoohPQrtsSpzyh6dhmCQYGCQ9Q00w6lxcmsZ'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout from + chanrge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
