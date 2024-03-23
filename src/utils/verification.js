

const Verification = (name,email,pass) => {
    
    const nameCheck = /^[a-zA-Z ]{2,30}$/.test(name);
    const emCheck = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const pasCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);

    if(!nameCheck) return "Name is not valid";
    if(!emCheck) return "Email is not valid";
    if(!pasCheck) return "Password is not Valid";

    else return null;
}

export default Verification;