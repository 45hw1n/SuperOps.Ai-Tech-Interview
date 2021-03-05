import { Component, OnInit } from '@angular/core';
import {ContentService} from './../../services/content.service'
import {Content} from './../../../models/content'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contents:Content[];
  constructor(private contentService:ContentService) { }

  ngOnInit(): void {
    this.contentService.getContents().subscribe((contents) => {
      this.contents = contents;
    });
  }


  deleteContent(content: Content) {
    this.contentService.deleteContent(content);
  }
  

}
