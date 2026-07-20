import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [],
  templateUrl: './data-list.html',
  styleUrls: ['./data-list.css']
})
export class DataList implements OnInit {
  private http = inject(HttpClient);
  
  // Data storage tracking incoming server records
  posts: any[] = [];

  ngOnInit() {
    this.loadRemoteData();
  }

  loadRemoteData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .subscribe({
        next: (response) => {
          this.posts = response;
        },
        error: (error) => {
          console.error('Network retrieval failed:', error);
        }
      });
  }
}