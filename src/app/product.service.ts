import { Injectable } from '@angular/core';
import { Http, ResponseType  } from '@angular/http';


@Injectable()
export class ProductService {

  private _albumUrl =  '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl);
  }

}
