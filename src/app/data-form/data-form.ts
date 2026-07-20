import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.html',
  styleUrl: './data-form.css',
})
export class DataForm {
private http = inject(HttpClient);

  formData = {
    title: '',
    body: ''
  };

  isSending = false;

  onSubmit() {
    this.isSending = true;

    // Directing UI context payload to external mock service environment
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.formData)
    .subscribe({
      next: (serverAck: any) => {
        console.log('Server Save Confirmation Ack:', serverAck);
        alert('Success! Content posted to global API endpoint.');
        this.formData = { title: '', body: '' };
        this.isSending = false;
      },
      error: (failContext: any) => {
        console.error('Server side processing rejected package:', failContext);
        this.isSending = false;
      }
    });
  }
}