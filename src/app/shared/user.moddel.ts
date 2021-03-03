import { IUser } from './user';

class fullNameObj {
	firstName : String | undefined;
	lastName : String | undefined;
  }
// class postG {
//     postGDegree : String | undefined;
// 	postGName : String | undefined;
// 	postGYear : String | undefined;
// 	postGGrade : String | undefined;
// }
// class bachD {
// 	bachDDegree : String | undefined;
// 	bachDName : String | undefined;
// 	bachDYear : String | undefined;
// 	bachDGrade : String | undefined;
// }
// class junorCLG {
// 	junorCLGDegree : String | undefined;
// 	junorCLGName : String | undefined;
// 	junorCLGYear : String | undefined;
// 	junorCLGGrade : String | undefined;
// }
// class educationDetObj  {
//     PG : postG | undefined;
//     UG : bachD | undefined;
//     jrclg : junorCLG | undefined;
// }
class educationDetObj  {
	postGDegree : String | undefined;
	postGName : String | undefined;
	postGYear : String | undefined;
	postGGrade : String | undefined;
	bachDDegree : String | undefined;
	bachDName : String | undefined;
	bachDYear : String | undefined;
	bachDGrade : String | undefined;
	jrCLGDegree : String | undefined;
	jrCLGName : String | undefined;
	jrCLGYear : String | undefined;
	jrCLGGrade : String | undefined;
}

class personalDetObj{
	firstName : String | undefined;
	lastName : String | undefined;
	address : String | undefined;
	phone : String | undefined;
	linkedInProfile : String | undefined;
}
class skillsObj {
	// skillName : string | undefined;
};
class experienceObj{
	year : string | undefined;
	projectName : string | undefined;
	projectDesc : string | undefined;
}

export class User {
    _id: string | undefined;
    firstName: string | undefined;
    fullName :  fullNameObj | undefined;
	educationDet : educationDetObj | undefined;
	native : string | undefined;
	age : number | undefined;
	personalDet : personalDetObj | undefined;
	skills : Array<Object> | undefined;
	languages : Array<Object> | undefined;
	hobbies : Array<Object> | undefined;
	experience0 : experienceObj | undefined;
	experience1 : experienceObj | undefined;
}
