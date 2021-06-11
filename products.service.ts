import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/api/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${name}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(name) {
    return this.http.get(`${baseUrl}?title=${name}`);
  }
}