import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {
feedback:Feedback = new Feedback();
  constructor(private router:Router,private feedbackservice: FeedbackService) { }

  ngOnInit(): void {
  }
  saveFeedback(){
    this.feedbackservice.createFeedback(this.feedback).subscribe(data=>{
      console.log(data);
      alert("feedbackadded Sucessfully");
      this.goToFeedbacklist();
    },
    error =>console.log(error));
  }
  goToFeedbacklist(){
    this.router.navigate(['feedback-list']);
  }


onSubmit(){
console.log(this.feedback);
this.saveFeedback();
}
}
