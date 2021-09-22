import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { AuctionListView } from './auctionList';
import { SetupView } from './setup';
import useWindowDimensions from '../../utils/layout';
import { size } from 'lodash';

export const HomeView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();
  const { width } = useWindowDimensions();
  const showAuctions = (store && isConfigured) || isLoading;

  
  
  if (width < 768)
    return (
      <Layout style={{ margin: 0, marginTop: 0, alignItems: 'center' }}>
        <img src="/solpfblack2transparentsmall.png"/> 
        <img src="/transparentcollection.gif"/> 
        {showAuctions ? <AuctionListView /> : <SetupView />}
       </Layout>)
  return(
    <Layout style={{ margin: 0, marginTop: 0, alignItems: 'middle', display: 'inline-block', justifyContent: 'flex start' }}>
      <img src="/transparentcollection.gif"/> 
      <div className="inline-block" />
      <img src="/solpfblack2transparent.png"/> 
      {showAuctions ? <AuctionListView /> : <SetupView />}
     </Layout>)

};
