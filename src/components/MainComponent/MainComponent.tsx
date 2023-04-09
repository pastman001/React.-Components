import React, { useEffect, useState } from 'react';
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
  const sendReq = () => {
    const url = `https://the-one-api.dev/v2/character?limit=100&page=${currentPage}&name=/${searchInput.searchArea}/i`;
    const token = 'VNOmxjiROYs5pks22sjD';
    const str = `Bearer ${token}`;
    axios
      .get(url, {
        headers: {
          Authorization: str,
        },
      })
      .then((response) => {
        console.log(response.data);
        setStore(response.data.docs);
        setPages(response.data.pages);
      });
  };
  useEffect(() => {
    localStorage.setItem('searchArea', searchInput.searchArea);
  }, []);
  const foo = () => {
    sendReq();
  };
  useEffect(() => {
    sendReq();
  }, [currentPage]); // Добавить функцию
  return (
    <div>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} foo={foo} />
      <Content store={store} pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
};
