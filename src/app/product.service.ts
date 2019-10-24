import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
// tslint:disable-next-line: import-spacing
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Album } from "./album";
import { Product } from './product'

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  private _productsUrl='../assets/products.json';
  public album: Album;
  products: Product[];

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => (this.album = <Album> response.json()));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => this.products = response.json());
  }
}
