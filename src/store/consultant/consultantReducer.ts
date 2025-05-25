// import { AppDispatch } from '../../store';
// import { setItems, setLoading, setError } from './itemsSlice';

// // Simulated async fetch
// export const fetchItems = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(setLoading(true));
//     // simulate API call
//     const response = await new Promise<string[]>(resolve =>
//       setTimeout(() => resolve(['Item 1', 'Item 2']), 1000)
//     );
//     dispatch(setItems(response));
//     dispatch(setLoading(false));
//   } catch (error: any) {
//     dispatch(setError(error.message || 'Failed to fetch items'));
//     dispatch(setLoading(false));
//   }
// };
