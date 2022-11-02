import { prime } from '../counterSlice';

function nbrPremier(nbr) {
    for(let i = 2; i < nbr; i++)
        if( nbr%i === 0 ) return false;
    return nbr > 1;
}

export default store => next => action => {
    
    const state = store.getState(); 
    console.log("before", state.counter.count);

    const returnAction = next(action);
    console.log("after", store.getState().counter.count);

    let primeValue = store.getState().counter.count - state.counter.count;
    console.log("prime", primeValue);

    if (nbrPremier(primeValue) != state.counter.prime) {
        store.dispatch(prime(nbrPremier(primeValue)));
    }
    
    return returnAction;
}