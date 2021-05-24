export function getIdList(state) {
    const list = [];
    state.list.forEach(catObj => {
        list.push(catObj.id);
    });

    return list;
}

export function getCatById(state, id) {
    return state.list.get(id);
}

export function getErrorMessage(state) {
    return state.error;
}