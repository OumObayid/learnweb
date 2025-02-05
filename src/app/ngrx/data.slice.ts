import {
  createAction,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Categorie } from '../interfaces/categorie';
import { Product } from '../interfaces/product';

// Interface pour l'état global
export interface DataState {
  categories: Categorie[];
  products: Product[];
  isLoggedIn: boolean;
}

// État initial
const initialState: DataState = {
  categories: [],
  products: [],
  isLoggedIn: typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true',
};

// -----------------------Actions-------------------------------


//categories
export const addCategories = createAction(
  '[Categories] Add Categories',
  (payload: Categorie[]) => ({ payload })
);
//products
export const addProducts = createAction(
  '[Products] Add Categories', // Nom de l'action
  (payload: Product[]) => ({ payload }) // Type de données associées à l'action:paylod
);
//isLoggedIn
export const setActiveUser = createAction('[Auth] Set Active User'); //pas de paylod
export const removeActiveUser = createAction('[Auth] Remove Active User'); //pas de paylod

// ----------------------Reducers-------------------------------
export const dataReducer = createReducer(
  initialState,
  // categories
  on(addCategories, (state, { payload }) => ({
    ...state,
    categories: payload,
  })),
  // products
  on(addProducts, (state, { payload }) => ({
    ...state,
    products: payload,
  })),
  on(setActiveUser, (state) => {
    // Mettre à jour localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
    }
    return { ...state, isLoggedIn: true };
  }),
  on(removeActiveUser, (state) => {
    // Supprimer l'état de localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
    return { ...state, isLoggedIn: false };
  })
);

// Sélecteurs
export const selectDataState = createFeatureSelector<DataState>('data');

export const selectCategories = createSelector(selectDataState,(state) => state.categories);
export const selectProducts = createSelector(selectDataState,(state) => state.products);
export const selectIsLoggedIn = createSelector(selectDataState,(state) => state.isLoggedIn);