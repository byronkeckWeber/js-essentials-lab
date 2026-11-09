import { redirect } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';

function NewPropertyPage() {
  return <PropertyForm method="post" />;
}

export default NewPropertyPage;
