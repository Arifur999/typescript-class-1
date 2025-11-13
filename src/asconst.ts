//  type UserRoles='Admin'| "Editor"|'viewer';


//  enum UserRoles{
//     Admin='Admin',
//     Editor="Editor",
//     Viewer="viewer"
//  }


const UserRoles={
    Admin:'Admin',
    Editor:"Editor",
    Viewer:"viewer"
 }as const;            //not change value...readonly hoye jay







 const canEdit=(role:(typeof UserRoles) [keyof typeof UserRoles])=>{
    if (role===UserRoles.Admin||role===UserRoles.Editor) {
        return true;

    }else return false
 };

 const isEdith =canEdit(UserRoles.Admin)

 console.log(isEdith);