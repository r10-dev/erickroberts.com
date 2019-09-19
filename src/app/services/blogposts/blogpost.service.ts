import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Content } from '../../models/content/content';

const baseurl = 'https://api.r10dev.com/';

@Injectable({
  providedIn: 'root'
})

export class BlogpostService {

  constructor(private client: HttpClient) { }

  posts: Content[];
  post: Content;
  postCount: number;

  findone(slug: string): Promise<any> {
    const url = baseurl + 'blogposts?slug_eq=' + slug;
    return this.client.get(url).toPromise().then(this.extractData).catch(this.handleError);
  }
  list(): Promise<any> {
    const url = baseurl + 'blogposts';
    return this.client.get(url).toPromise().then(this.extractData).catch(this.handleError);
  }
  count(): Promise<any> {
    const url = baseurl + 'blogposts/count';
    return this.client.get(url).toPromise().then(this.extractData).catch(this.handleError);
  }
  private extractData(res: any) {
    const body = res;
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
