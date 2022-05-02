import { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setupLayout } from '../../../slices/layoutSlice';
import { getLayout } from '../../../api/getLayout';
import { ILayout } from '../../../slices/layout.interface';

export const useGetLayoutEffect = () => {
  const dispatch = useDispatch();

  const [layout, setLayout] = useState<ILayout | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLayout = async () => {
    try {
      if (loading) return;
      setLoading(true);
      setError('');

      const res = await getLayout();
      setLayout(res);
      dispatch(setupLayout(res));
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
    handleLayout, layout, loading, error,
  };
};
