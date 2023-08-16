import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Details } from '../Model/details';
import { PostService } from '../Services/post.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  userDetails: FormGroup;
  status: boolean = false;
  maxDate:Date=new Date()


  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: Router
  )
   
  
  
  {
    // this.maxDate=new Date();
    this.maxDate.setDate(this.maxDate.getDate()),
    this.userDetails = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), this.namevalidation]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$")]],
      date: [null, [Validators.required, this.futureDateValidator]],
      phoneNumber: ['', [Validators.minLength(10)]],
      quantity: [""],
      amount: [""],
      cakename: [""],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', [Validators.maxLength(6), Validators.minLength(5)]],
      }),
    });
  }

  ngOnInit(): void {}

  get firstName() {
    return this.userDetails.get('firstName');
  }

  get email() {
    return this.userDetails.get('email');
  }

  get phoneNumber() {
    return this.userDetails.get('phoneNumber');
  }

  get street() {
    return this.userDetails.get('address.street');
  }

  get city() {
    return this.userDetails.get('address.city');
  }

  get state() {
    return this.userDetails.get('address.state');
  }

  get zipCode() {
    return this.userDetails.get('address.zipCode');
  }

  get date() {
    return this.userDetails.get('date');
  }
 


  futureDateValidator(control: AbstractControl) {
    const selectedDate = control.value;
    const currentDate = new Date();
  
    if (selectedDate && selectedDate < currentDate) {
      return { pastDate: true };
    }
    
    return null;
  }
   namevalidation(control: AbstractControl) {
    const nameValue = control.value;
  
    if (nameValue.startsWith('0')) {
      return { invalidname: true };
    } else {
      return null;
    }
  }
  
  @Input() quantities: number | undefined;

  @Input() pricing: number | undefined;

  @Input() cakename: string | undefined;

  confirm() {
    if (!this.status) {
      return confirm('You have Not Submitted your Order. Do you really want to leave?');
    }
    return true;
  }

  onSubmit() {
    this.status = true;
    const q = this.userDetails.get("quantity");
    q?.setValue(this.quantities);

    const p = this.userDetails.get("amount");
    p?.setValue(this.pricing);

    const c = this.userDetails.get("cakename");
    c?.setValue(this.cakename);

    let content: Details = this.userDetails.value as Details;

    this.postService.addCustomerOrder(content).subscribe(
      data => {
        console.log("Success:", data);
        this._snackBar.open('Customer details added successfully', 'Close', {
          duration: 3000,
        });
        this.route.navigateByUrl("/home");
      },
      error => {
        console.error("Error:", error);
        this._snackBar.open('Error adding customer details', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  submit() {
    this.status = true;
    let customer: Details = this.userDetails.value as Details;
    this.postService.addCustomerOrder(customer);
  }
}
