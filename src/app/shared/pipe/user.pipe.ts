import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../model/users';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {
  transform(user: Iuser[], name: string, companyName:string, designation:string): any {
    // return user.filter((search: any) => {
    //   return search.name.toLowerCase().includes(name.toLowerCase()) ||            search.company.name.toLowerCase().includes(name.toLowerCase()) ||     search.company.designation.toLowerCase().includes(name.toLowerCase())
    // })
    return user.filter((search: any) => {
      return search.name.toLowerCase().includes(name.toLowerCase()) &&            search.company.name.toLowerCase().includes(companyName.toLowerCase()) &&     search.company.designation.toLowerCase().includes(designation.toLowerCase())
    })
  }

}
