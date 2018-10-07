export const checkUser = (users, user) => {
    const existingUser = users.filter(item => {
        return item.userName === user.userName
    });
    if(existingUser.length > 0){
        if(existingUser[0].pinCode === user.pinCode){
            return true;
        }
        alert('Pincode not matching');
        return false;
    } else {
        alert('User Name not found');
        return false;
    }
    
}

export const checkUserName = (users, user) => {
    const existingUser = users.filter(item => {
        return item.userName === user.userName
    });
    if(existingUser.length > 0){
        alert('User Name already exists');
        return false;
    }
    return true;
    
}