import { HttpHeaders } from '@angular/common/http';

export const getAuthorizationHeaders = (): HttpHeaders => {
    const headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    return headers.set('Authorization', `Bearer ${token}`);;
};