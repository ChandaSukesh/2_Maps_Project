/// <reference types="@types/google.maps" />

import { Company } from './Company';
import { CustomMap } from './CustomMap';
import {User} from './User'


const user =new User()
console.log("Hello",user)

const company =new Company()
console.log("Hi",company)



const customMap=new CustomMap('map')
customMap.addMarker(user)
customMap.addMarker(company)