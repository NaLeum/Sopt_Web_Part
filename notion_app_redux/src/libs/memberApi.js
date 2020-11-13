import api from './api';

export const memberList = () => {
    return api.get(`/members`);
}

export const memberDetail = id => {
    return api.get(`/members/${id}`);
}