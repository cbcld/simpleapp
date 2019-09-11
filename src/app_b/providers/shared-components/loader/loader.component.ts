import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { loaderService } from './../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  inProgress = false;
  constructor(private ref: ChangeDetectorRef, private loaderService: loaderService) { }

  ngOnInit() {
    this.loaderService.isLoading
      .subscribe(status => {
        setTimeout(() => {
          this.inProgress = status;
          this.ref.markForCheck();
        }, 0);
      });
  }

}
