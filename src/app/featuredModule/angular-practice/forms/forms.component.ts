import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  reactiveTest: FormGroup;
  isGender: boolean = false;
  isVisited: boolean = false;
  genderOptions: any = [
    { id: 1, gender: 'male' },
    { id: 2, gender: 'female' }
  ];
  personTypeOptions: any[] = [
    { id: 1, type: 'Robort' },
    { id: 2, type: 'Humans' }
  ];
  hobbiesOption: any[] = [
    { id: 1, type: 'Cooking' },
    { id: 2, type: 'Dance' },
    { id: 3, type: 'Singing' },
    { id: 4, type: 'Programming' }
  ]
  constructor(private formbuilder: FormBuilder) {
    this.formValidationCheck()
  }
  formValidationCheck() {
    this.reactiveTest = this.formbuilder.group({
      firstname: ["", Validators.required],
      email: ["", Validators.required],
      personType: ["", Validators.required],
      city: ["", Validators.required],
      gender: [""],
      visit: [""],
      skills: this.formbuilder.array([
        this.formbuilder.group({
          skillName: ["", Validators.required],
          experience: ["", Validators.required]
        })
        //this.formbuilder.control('', Validators.required),
      ]),
      checkArray: this.formbuilder.array([],[Validators.required])
      // hobbies:this.formbuilder.array([], [Validators.required])
    })
  }
  onCheckboxChange(e) {
  
    const checkArray: FormArray = this.reactiveTest.get('checkArray') as FormArray;
    if (e.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(checkArray.length);
  }

  formSubmit(data) {

    console.log(data.valid);
    if (!data.valid) {
      this.formValidationCheck();
    } else {
      console.log(data.value);
    }
  }
  getPersonType(event) {
    console.log(event.value);
    if (this.reactiveTest.get('personType').value == 'Humans') {
      this.isGender = true;
      this.reactiveTest.get('gender').setValidators(Validators.required);
    } else {
      this.isGender = false;
      this.reactiveTest.get('gender').clearValidators();
      this.reactiveTest.get('gender').setValue('');
    }
    this.reactiveTest.get('gender').updateValueAndValidity();
  }
  getCity(event) {
    console.log(event.value);
    if (this.reactiveTest.get('city').value == 'amritsar') {
      this.isVisited = true;
      this.reactiveTest.get('visit').setValidators([Validators.required]);
    } else {
      this.isVisited = false;
      this.reactiveTest.get('visit').clearValidators();
      this.reactiveTest.get('visit').setValue('');
    }
    this.reactiveTest.get('visit').updateValueAndValidity();
  }

  addSkills() {
    //(this.reactiveTest.get('skills') as FormArray).push(this.formbuilder.control('', Validators.required));
    (this.reactiveTest.get('skills') as FormArray).push(this.formbuilder.group({
      skillName: ["", Validators.required],
      experience: ["", Validators.required]
    }));
  }
  skillsRemove(i) {
    if (i >= 1) {
      (this.reactiveTest.get('skills') as FormArray).removeAt(i);
    }
  }

  ngOnInit() {
  }

}
