import axios from 'axios';
import { API_KEY, API_URL } from '../constants/Constant';

function getServerConfig(isMultipart = false) {
    return {
        headers: {
            'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
            'x-api-key': API_KEY
        }
    }
}

export async function getData(url) {
    try {
        const config = getServerConfig();
        const response = await axios.get(`${API_URL}${url}`, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

export async function postData(url, data) {
    try {
        const config = getServerConfig();
        const response = await axios.post(`${API_URL}${url}`, data, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

export async function deleteData(url) {
    try {
        const config = getServerConfig();
        const response = await axios.delete(`${API_URL}${url}`, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

export async function uploadImage(url, request) {
    try {
        const config = getServerConfig(true);
        const response = await axios.post(`${API_URL}${url}`, request, config);

        return response.data;
    }
    catch (e) {
        checkError(e);
    }
}

function checkError(e) {
    if (e.response && e.response.data && e.response.data.message) {
        throw new Error(e.response.data.message);
    }
    else {
        throw e;
    }
}