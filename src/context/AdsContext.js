import React from 'react';

var AdsStateContext = React.createContext();
var AdsDispatchContext = React.createContext();

function adsReducer(state, action) {
    switch (action.type) {
        case 'SET_SEARCH_DATA':
            return { ...state, searchData: action.payload }
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        case 'SET_TEXT2':
            return { ...state, text2: action.payload }
        case 'SET_PAGE':
            return { ...state, page: action.payload }
        case 'SET_PAGE2':
            return { ...state, page2: action.payload }
        case 'SET_RSTATUS':
            return { ...state, rStatus: action.payload }
        case 'TOGGLE_END':
            return { ...state, end: !state.end }
        case 'TOGGLE_SHOULD':
            return { ...state, should: !state.should }
        case 'SET_ACTIVE':
            return { ...state, active: action.payload }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function AdsProvider({ children }) {

    var [state, dispatch] = React.useReducer(adsReducer, {
        searchData: {},
        end: false,
        should: false,
        text: '',
        page: undefined,
        rStatus: '',
        text2: '',
        page2: undefined,
        active: undefined
    });
    return (
        <AdsStateContext.Provider value={state}>
            <AdsDispatchContext.Provider value={dispatch}>
                {children}
            </AdsDispatchContext.Provider>
        </AdsStateContext.Provider>
    );
}

function useAdsState() {
    var context = React.useContext(AdsStateContext);
    if (context === undefined)
        throw new Error("useAdsState must be used within a AdsProvider");
    return context;
}

function useAdsDispatch() {
    var context = React.useContext(AdsDispatchContext);
    if (context === undefined)
        throw new Error("useAdsDispatch must be used within a AdsProvider");
    return context;
}

export { AdsProvider, useAdsState, useAdsDispatch, setSearchData, toggleEnd, toggleShould, setText, setText2, setPage, setPage2, setRstatus, setActive }

function setSearchData(dispatch, data) {
    dispatch({
        type: 'SET_SEARCH_DATA',
        payload: data
    })
}

function toggleEnd(dispatch) {
    dispatch({
        type: 'TOGGLE_END',
    })
}
function toggleShould(dispatch) {
    dispatch({
        type: 'TOGGLE_SHOULD',
    })
}
function setText(dispatch, text) {
    dispatch({
        type: 'SET_TEXT',
        payload: text
    })
}
function setText2(dispatch, text2) {
    dispatch({
        type: 'SET_TEXT2',
        payload: text2
    })
}
function setPage(dispatch, page) {
    dispatch({
        type: 'SET_PAGE',
        payload: page
    })
}
function setPage2(dispatch, page2) {
    dispatch({
        type: 'SET_PAGE2',
        payload: page2
    })
}
function setRstatus(dispatch, rStatus) {
    dispatch({
        type: 'SET_RSTATUS',
        payload: rStatus
    })
}
function setActive(dispatch, index) {
    dispatch({
        type: 'SET_ACTIVE',
        payload: index
    })
}