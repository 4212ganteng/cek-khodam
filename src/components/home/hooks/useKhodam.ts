import { khodamData } from '@/faker/khodam';
import React, { useState } from 'react';
import { Khodam } from '../type/khodam';

export const useKhodam = () => {
  const [user, setUser] = useState<string>('');
  const [myKhodam, setMyKhodam] = useState<Khodam>({
    name: 'Kosong',
    description: '',
  });

  console.log(user.length);
  console.log(myKhodam);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user) {
      const result = user.length % khodamData.length;
      setMyKhodam(khodamData[result]);
    } else {
      return alert('Please input your name');
    }
  };
  return { setUser, handleSubmit, user, myKhodam };
};
