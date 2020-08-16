import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { classify } from '@angular-devkit/core/src/utils/strings';

const URL = '<%=url%>';

@Injectable({
    providedIn: 'root'
})

export class <%= classify(name) %>Service{

    constructor(private httpClient: HttpClient){

    }

    findAll(): Observable<I<%=classify(name)%>[]> {
        return this.httpClient.get<I<%=classify(name)%>[]>(URL);
    }

    <% if(findOne) {%>
       findOne(id:string):Observable<I<%=classify(name)%>>{ 
           return this.httpClient.get<I<%=classify(name)%>>(`${URL}/${id}`);
       }    
    <%}%>
}

export interface I<%= classify(name) %> {
    prop: string;
}