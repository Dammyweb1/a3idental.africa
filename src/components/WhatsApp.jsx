import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget  phoneNumber="+2347066278395"
        companyName="A3iDental"
        replyTimeText="Typically replies within an hour" />
    );
};

export default App;