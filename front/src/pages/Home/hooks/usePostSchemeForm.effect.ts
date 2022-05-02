import { useState } from 'react';
import Axios from 'axios';
import { postForm } from '../../../api/postForm';

export const usePostSchemeFormEffect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(0);

  const handlePostForm = async (data: any) => {
    try {
      if (loading) return;
      setLoading(true);
      setError('');

      const res = await postForm(data);

      setStatus(res.status);
      setLoading(false);

      setTimeout(() => {
        setStatus(0);
      }, 2000);
    } catch (e) {
      if (e instanceof Axios.Cancel) {
      } else {
        setError('Unable to get scheme');
        setLoading(false);
      }
    }
  };

  return {
    handlePostForm, loading, error, status, setError,
  };
};
