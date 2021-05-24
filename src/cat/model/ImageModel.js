import { getData, postData, uploadImage, deleteData } from '../../common/Utils/HttpUtils';
import { changeError, changeVote, removeFavourite, removeVote, setFavourite, setList } from '../Store/CatBundle';
import { dispatch } from '../../Store';

export async function fetchList() {
    const data = await getData('/images/?limit=100');

    return data;
}

export async function fetchFavourites() {
    const data = await getData('/favourites');

    return data;
}

export async function fetchVotes() {
    const data = await getData('/votes');

    return data;
}

export async function upload(request) {
    try {
        const data = await uploadImage('/images/upload', request);

        return data;
    }
    catch (e) {
        dispatch(changeError(e.message));
        throw e;
    }
}

export async function getAll() {
    try {
        const list = await Promise.all([
            fetchList(),
            fetchFavourites(),
            fetchVotes()
        ]);
        const [catList, favList, voteList] = list;

        dispatch(setList({
            catList,
            favList,
            voteList
        }));
    }
    catch (e) {
        dispatch(changeError(e.message));
    }
}

export async function setToFavourite(image_id) {
    try {
        const request = {
            "image_id": image_id
        };

        const data = await postData('/favourites', request);

        if (data) {
            dispatch(setFavourite({
                favId: data.id,
                image_id
            }));
        }
    }
    catch (e) {
        dispatch(changeError(e.message));
    }
}

export async function deleteFromFavourite(id, image_id) {
    try {
        const data = await deleteData(`/favourites/${id}`);

        if (data) {
            dispatch(removeFavourite({
                image_id
            }));
        }
    }
    catch (e) {
        dispatch(changeError(e.message));
    }
}

export async function changeImageVote(image_id, totalVote, deletedIds) {
    try {
        const request = {
            "image_id": image_id,
            "value": totalVote
        };

        const data = await postData('/votes', request);

        if (data) {
            dispatch(changeVote({
                image_id,
                totalVote,
                voteId: data.id
            }));

            await Promise.all(deletedIds.map(x => deleteVoteId(image_id, x)));
        }
    }
    catch (e) {
        dispatch(changeError(e.message));
    }
}

async function deleteVoteId(image_id, voteId) {
    const data = await deleteData(`/votes/${voteId}`);

    if (data) {
        dispatch(removeVote({
            image_id,
            voteId
        }));
    }

    return data;
}