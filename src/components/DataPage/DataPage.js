/* eslint-disable default-case */
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { dataTypes } from '../../redux/common';
import { selectDataType } from '../../redux/reducers/data/dataSelectors';
import { setFilter } from '../../redux/reducers/data/dataSlice';
import { getData } from '../../redux/reducers/data/dataThunks';
import DataPageLayout from '../DataPageLayout/DataPageLayout';
import PropTypes from 'prop-types';

export default function DataPage({ dataType }) {
   const dispatch = useDispatch();
   const [searchParams] = useSearchParams();

   const filterName = searchParams.get('filter');
   const filterValue = searchParams.get('value');
   const currentDataType = useSelector(selectDataType);

   // Set title
   let title;
   switch (dataType) {
      case dataTypes.CHARACTER:
         title = 'Characters';
         break;
      case dataTypes.EPISODE:
         title = 'Episodes';
         break;
      case dataTypes.QUOTE:
         title = 'Quotes';
         break;
   }
   usePageTitle(`Breaking Bad - ${title}`);

   // Fetch data from server
   useLayoutEffect(() => {
      if (currentDataType !== dataType) {
         dispatch(getData(dataType));
      }
   }, [dataType, dispatch, currentDataType]);

   // Set search filters
   useEffect(() => {
      if (filterName && filterValue) {
         dispatch(setFilter(filterName, filterValue));
      }
   }, [filterName, filterValue, dispatch]);

   return <DataPageLayout />;
}

DataPage.propTypes = {
   dataType: PropTypes.string.isRequired,
};
