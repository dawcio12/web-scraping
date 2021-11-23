export interface Post {
title:string;
text:string;
comments:string;
}
export interface Years{
    year:number;
}
export interface Article{
     title:string;
     date:Date;
     href:string;
 }
 export interface Articles {
    articles:Article[];
    length:number;
}
