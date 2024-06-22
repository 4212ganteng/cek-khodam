import { khodamData } from '@/faker/khodam';
import React, { useState } from 'react';
import { Khodam } from '../type/khodam';

export const useKhodam = () => {
  const [user, setUser] = useState<string>('');
  const [myKhodam, setMyKhodam] = useState<Khodam>({
    name: '',
    userName: '',
    description: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user) {
      const indexKhodam = user.length % khodamData.length;

      setMyKhodam({
        ...myKhodam,
        userName: user,
        name: khodamData[indexKhodam].name,
        description: khodamData[indexKhodam].description,
      });
    } else {
      return alert('Please input your name');
    }
  };
  return { setUser, handleSubmit, user, myKhodam };
};
