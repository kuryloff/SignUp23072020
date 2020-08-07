const {Record} = require('immutable');
const  CreateUserDTO = Record({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
});
export default CreateUserDTO;

