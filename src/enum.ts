// enum
//  type UserRoles='Admin'| "Editor"|'viewer';


 enum UserRoles{
    Admin='Admin',
    Editor="Editor",
    Viewer="viewer"
 }

 const canEdit=(role:UserRoles)=>{
    if (role===UserRoles.Admin||role===UserRoles.Editor) {
        return true;

    }else return false
 };

 const isEdith =canEdit(UserRoles.Admin)

 console.log(isEdith);














































 
 //--experimental-transform-types