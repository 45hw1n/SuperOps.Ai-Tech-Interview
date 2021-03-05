import { Component, OnInit } from '@angular/core';
import {Content} from './../../../models/content'
import {ContentService} from './../../services/content.service'
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-content-ops',
  templateUrl: './content-ops.component.html',
  styleUrls: ['./content-ops.component.scss']
})
export class ContentOpsComponent implements OnInit {
  content: string;
  Subcontent: string;
  description: string;
  sno:number;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }
  handleAdd() {
    const newContent: Content = {
      id: uuidv4(),
      date: new Date(),
      sno:this.sno,
      content: this.content,
      subcontent: this.Subcontent,  
      description: this.description,
    };
    this.contentService.addContent(newContent);
    this.content = "";
    this.description ="";
    this.Subcontent="";
    this.sno =null;
  }
}
