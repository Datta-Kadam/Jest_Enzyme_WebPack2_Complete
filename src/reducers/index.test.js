import rootReducer from './index';

describe('rootReducer',()=>{
    it('initializes a default `state`',()=>{
        expect(rootReducer({},{})).toEqual({balance:0,bitcoin:{}});
    });
});