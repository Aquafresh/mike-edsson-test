import { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSchemeForm } from '../../../api/getSchemeForm';
import { setupSchemeForm } from '../../../slices/formSlice';
import { IScheme } from '../../../slices/scheme.interface';

export const useGetSchemeFormEffect = () => {
  const dispatch = useDispatch();

  const [schemeForm, setSchemeForm] = useState<IScheme | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSchemeForm = async () => {
    try {
      if (loading) return;
      setLoading(true);
      setError('');

      const res = await getSchemeForm();
      setSchemeForm(res);
      dispatch(setupSchemeForm(res));
      setLoading(false);
    } catch (e) {
      if (e instanceof Axios.Cancel) {
      } else {
        setError('Unable to get scheme');
        setLoading(false);
      }
    }
  };

  return {
    handleSchemeForm, schemeForm, loading, error,
  };
};
