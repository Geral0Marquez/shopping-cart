
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PurchasesComp from '../components/PurchasesComp';
import { getPurchases } from '../store/slices/purchases.slice';


const Purchases = () => {
  const dispatch = useDispatch();

  const purchasesItems = useSelector(state => state.purchases);


  useEffect(() => {
    dispatch(getPurchases())
  }, [dispatch])

  return (
    <div className='main-container purchases'>
      <div className="leaded">
        <a href="#/">Home</a>
        <div className="separator"></div>
        <b> My purchases</b>
      </div>
      {
        purchasesItems.map(purchases => (
          <PurchasesComp purchases={purchases} key={purchases.id} />
        ))
      }

    </div>

  );
};

export default Purchases;