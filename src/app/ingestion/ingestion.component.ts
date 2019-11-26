import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.css']
})
export class IngestionComponent implements OnInit {
    public symbol = new FormControl('');

    public function = new FormControl('');

    public interval = new FormControl('');

    public outputSize = new FormControl('');

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }
}
