import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  hostURL : any = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getMovies(){
        return this.httpClient.get(this.hostURL+"/movies");
  }

  public getMoviesByTitle(title:string){
    return this.httpClient.get(this.hostURL+"/movies/title/"+title);
  }
  public getMoviesByDirector(keyword: any) {
    return this.httpClient.get(this.hostURL+"/movies/director/"+keyword);
  }

  public getMoviesByType(keyword: any) {
    return this.httpClient.get(this.hostURL+"/movies/type/"+keyword);
  }
  public getMoviesByReleaseDate(keyword: any) {
    return this.httpClient.get(this.hostURL+"/movies/date/"+keyword);
    console.log(keyword)
  }
  public removeMovie(title:string){
    console.log("before deleting ... ");
     return this.httpClient.delete(this.hostURL+"/movies/"+title);
  }

  public loadAll(){
    return this.httpClient.get(this.hostURL+"/movies");
  }

  public saveMovie( data){
      return this.httpClient.post(this.hostURL+"/movies",data);
  }
  public updateMovie(data){
    return this.httpClient.put(this.hostURL+"/movies",data);
  }
}
