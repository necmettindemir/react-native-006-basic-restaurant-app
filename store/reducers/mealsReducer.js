
import { MEALS } from '../../data/dummy-data'; 

import { 
        TOGGLE_FAVORITE, 
        SET_FILTERS } 
        from '../actions/mealsAction';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    
    //console.log('action: ', action);

    switch (action.type) {

        case TOGGLE_FAVORITE:

            const existingIndex = state.favoriteMeals.findIndex( meal => meal.id === action.mealId);
            
            if (existingIndex >= 0) { 
                
                //means to remove item from fav meals
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex,1);

                return { ...state, favoriteMeals: updatedFavMeals};
            } else {
                
                //means to add item from fav meals                                
                const mealToAdd= state.meals.find(meal => meal.id === action.mealId);                              
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.push(mealToAdd);

                return { ...state, favoriteMeals: updatedFavMeals};
            }
                        
        case SET_FILTERS:
            
            const appliedFilters = action.filter;

            const currentFilteredMeals = state.meals.filter(
                meal => {
                    
                    if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                        return false;
                    }

                    if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                        return false;
                    }

                    if (appliedFilters.vegan && !meal.isVegan) {
                        return false;
                    }

                    if (appliedFilters.vegetarian && !meal.isVegetarian) {
                        return false;
                    }

                    return true;
                }
            );

            return { ...state, filteredMeals: currentFilteredMeals};

        default:
            return state;
    }

    
};


export default mealsReducer;