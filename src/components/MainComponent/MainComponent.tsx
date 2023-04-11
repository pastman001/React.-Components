import React, { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { StoreType } from '../../App';
import { Content, SearchBar } from './index';
import './style.css';

export const MainComponent: React.FC<StoreType> = ({ store, setStore }) => {
  const { pageNumber } = useParams();
  const localStorageSearchArea = localStorage.getItem('searchArea');
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(Number(pageNumber?.split('=')[1]) || 1);
  const [searchInput, setSearchInput] = useState({
    searchArea: localStorageSearchArea !== null ? localStorageSearchArea : '',
  });
  const [isNoData, setIsNoData] = useState(true);
  const sendReq = useCallback(
    (value?: string) => {
      setIsNoData(true);
      let url = `https://the-one-api.dev/v2/character?limit=100&page=${currentPage}&name=/${value}/i`;
      if (value === undefined) {
        url = `https://the-one-api.dev/v2/character?limit=100&page=${currentPage}`;
      }
      const token = 'VNOmxjiROYs5pks22sjD';
      const str = `Bearer ${token}`;
      axios
        .get(url, {
          headers: {
            Authorization: str,
          },
        })
        .then((response) => {
          setStore(response.data.docs);
          setPages(response.data.pages);
          setIsNoData(false);
        });
    },
    [currentPage, setStore]
  );
  useEffect(() => {
    localStorage.setItem('searchArea', searchInput.searchArea);
  }, [searchInput.searchArea]);
  useEffect(() => {
    sendReq();
  }, [currentPage, sendReq]);
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} sendReq={sendReq} />
      {isNoData && <div>Now loading...</div>}
      {!isNoData && <Content store={store} pages={pages} setCurrentPage={setCurrentPage} />}
    </div>
  );
};
