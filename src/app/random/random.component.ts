import { Component, OnInit } from '@angular/core';
import {DogService} from '../dog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.sass']
})
export class RandomComponent implements OnInit {
  dogUrl: string;
  dogName: string;


  constructor(private dogFetcher: DogService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe( params => {
     this.dogName = params.get('name');
    });
  }

  ngOnInit() {
    this.dogFetcher.getRandomDog().subscribe(
      (result) => {
        this.dogUrl = result.message;
        console.log(result);
      }
    );

    }

}
