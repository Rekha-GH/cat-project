import { createSlice } from '@reduxjs/toolkit'

function setListProcess(state, action) {
    const {
        catList,
        favList,
        voteList
    } = action.payload;

    catList.forEach(catObj => {
        const favObj = favList.find(x => x.image_id === catObj.id);
        let totalVote = 0;
        const voteIds = [];
        voteList.forEach(x => {
            if (x.image_id === catObj.id) {
                if (totalVote < x.value) {
                    totalVote = x.value;
                }

                voteIds.push(x.id);
                return true;
            }

            return false;
        });

        state.list.set(catObj.id, {
            ...catObj,
            likeId: favObj !== undefined ? favObj.id : undefined,
            totalVote,
            voteIds
        });
    });
}

function setFavouriteProcess(state, action) {
    const {
        favId,
        image_id
    } = action.payload;

    const catObj = state.list.get(image_id);

    if (catObj) {
        state.list.set(image_id, {
            ...catObj,
            likeId: favId
        });
    }
}

function removeFavouriteProcess(state, action) {
    const { image_id } = action.payload;

    const catObj = state.list.get(image_id);

    if (catObj) {
        state.list.set(image_id, {
            ...catObj,
            likeId: undefined
        });
    }
}

function changeVoteProcess(state, action) {
    const {
        totalVote,
        image_id,
        voteId
    } = action.payload;

    const catObj = state.list.get(image_id);

    if (catObj) {
        const voteIds = catObj.voteIds;
        voteIds.push(voteId);

        state.list.set(image_id, {
            ...catObj,
            totalVote,
            voteId
        });
    }
}

function removeVoteProcess(state, action) {
    const {
        image_id,
        voteId
    } = action.payload;

    const catObj = state.list.get(image_id);

    if (catObj) {
        const index = catObj.voteIds.indexOf(voteId);
        catObj.voteIds.splice(index, 1);

        state.list.set(image_id, {
            ...catObj,
        });
    }
}

function changeErrorProcess(state, action) {
    state.error = action.payload;
}

export const catBundle = createSlice({
    name: 'list',
    initialState: {
        list: new Map(),
        error: undefined
    },
    reducers: {
        setList: setListProcess,
        setFavourite: setFavouriteProcess,
        removeFavourite: removeFavouriteProcess,
        changeVote: changeVoteProcess,
        removeVote: removeVoteProcess,
        changeError: changeErrorProcess
    },
})

export const { setList, setFavourite, removeFavourite, changeVote, removeVote, changeError } = catBundle.actions

export default catBundle.reducer