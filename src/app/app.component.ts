import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudoperation';
  url = 'http://localhost:3000/person'
  data1:any
  nametemplatecreate:any;
  emailtemplatecreate:any;
  phonetemplatecreate:any;
  nametemplateModify:any;
  emailtemplateModify:any;
  phonetemplateModify:any;
  tsId:any;
  index:any;
  constructor(private http:HttpClient){
    http.get(this.url).subscribe(datafromjson => {
      this.data1=datafromjson
    })
}
onsubmitCreate(dataCreate:any){
  this.http.post(this.url, dataCreate.value).subscribe(res => {
    this.data1.push(res)
  })
}
onDelete(deleteData:any){
  this.http.delete(this.url+"/"+deleteData.id).subscribe(()=>{
    this.data1.splice(this.data1.indexOf(deleteData),1)
  })
}
onUpdate(ele:any){
  this.nametemplateModify=ele.namejson
  this.emailtemplateModify=ele.emailjson
  this.phonetemplateModify=ele.phonejson
  this.tsId = ele.id
  this.index=this.data1.indexOf(ele)
}
onModify(dataModify:any){
  this.http.put(this.url+"/"+this.tsId,dataModify.value).subscribe(()=>{
    this.data1[this.index]=dataModify.value
  })
}
}