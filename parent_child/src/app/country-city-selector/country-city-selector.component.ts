import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-city-selector',
  templateUrl: './country-city-selector.component.html',
  styleUrls: ['./country-city-selector.component.css']
})
export class CountryCitySelectorComponent {
  @Input() countries: string[] = [];
  @Output() selectedCity = new EventEmitter<string>();

  form: FormGroup;
  cities: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: [''],
      city: ['']
    });

    this.form.get('country')?.valueChanges.subscribe(country => {
      this.updateCityList(country);
    });

    this.form.get('city')?.valueChanges.subscribe(city => {
      this.selectedCity.emit(city);
    });
  }

  private updateCityList(country: string) {
    switch (country) {
      case 'India':
        this.cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'];
        break;
      case 'USA':
        this.cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
        break;
      default:
        this.cities = [];
    }
    this.form.get('city')?.setValue(''); // Reset city when country changes
  }
}
