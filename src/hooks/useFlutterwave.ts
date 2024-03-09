import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { FLUTTERWAVE_PUBLIC_KEY } from '../constants';

type ConfigProps = {
    amount: number,
    customer: {
      email: string,
      phone_number: string,
      name: string,
    }
}

export default function HandlePayWithFlutterwave (payload: ConfigProps) {
    const config = {
        ...payload,
        payment_options: 'card,mobilemoney,ussd, account, banktransfer',
        public_key: FLUTTERWAVE_PUBLIC_KEY!,
        tx_ref: Date.now().toString(),
        currency: 'NGN',
        customizations: {
          title: 'C L A C E',
          description: 'complete your payment',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    }

    const handleFlutterPayment = useFlutterwave(config)

    return  handleFlutterPayment({
        callback: (response) => {
           console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      })
}