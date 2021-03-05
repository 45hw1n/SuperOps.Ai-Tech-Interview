import { Injectable } from '@angular/core';
import { Content } from "./../../models/content";
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  contents: Content[];
  constructor() {
    this.contents = [
      {
        id: "111",
        sno: 1,
        content: "PyTorch 1.8, with AMD ROCm support",
        subcontent:"(github.com/pytorch)",
        description: "160 points by lnyan 5 hours ago | hide | 52 comments",
        date: new Date(),
      },
      {
        id: "222",
        sno: 2 ,
        content: "Open source projects should run office hours ",
        subcontent:" (simonwillison.net)",
        description: 	"416 points by tosh 9 hours ago | hide | 138 comments",
        date: new Date(),
      },
      {
        id: "333",
        sno: 3,
        content: "Girl and Computer: Reflecting on the journey that got me to where I am today ",
        subcontent:"(rmurphey.medium.com)",
        description: "	31 points by mpweiher 2 hours ago | hide | 6 comments",
        date: new Date(),
      },
      {
        id: "111",
        sno: 4,
        content: "PyTorch 1.8, with AMD ROCm support",
        subcontent:"(github.com/pytorch)",
        description: "160 points by lnyan 5 hours ago | hide | 52 comments",
        date: new Date(),
      },
      {
        id: "222",
        sno: 5 ,
        content: "Open source projects should run office hours ",
        subcontent:" (simonwillison.net)",
        description: 	"416 points by tosh 9 hours ago | hide | 138 comments",
        date: new Date(),
      },
      {
        id: "333",
        sno: 6,
        content: "Girl and Computer: Reflecting on the journey that got me to where I am today ",
        subcontent:"(rmurphey.medium.com)",
        description: "	31 points by mpweiher 2 hours ago | hide | 6 comments",
        date: new Date(),
      },
    ];
   }
   getContents(){
    return of(this.contents);
  }
  addContent(content:Content){
    this.contents.push(content);
  }
  deleteContent(content: Content) {
    const indexofContent = this.contents.findIndex(
      (currentObj) => currentObj.id === content.id,
    );
    this.contents.splice(indexofContent, 1);
  }
}


