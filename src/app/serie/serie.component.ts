import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  constructor(private serieService: SerieService) {}
  average: string = '';
  series: Array<Serie> = [];

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      let total = 0;
      series.forEach((s) => {
        total += s.seasons;
      });
      let average = total / series.length;
      this.series = series;
      this.average = 'Seasons average: ' + average;
    });
  }

  ngOnInit() {
    this.getSeries();

  }
}