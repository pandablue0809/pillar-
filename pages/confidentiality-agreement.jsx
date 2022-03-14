import MainLayout from 'components/Layouts/MainLayout';
import { confidentialityMarkup } from 'utils';

const ConfidentialityAgreement = () => {
  return (
    <MainLayout>
      <div
        className="padding-wrapper policies"
        dangerouslySetInnerHTML={{ __html: confidentialityMarkup }}></div>
    </MainLayout>
  );
};

export default ConfidentialityAgreement;
