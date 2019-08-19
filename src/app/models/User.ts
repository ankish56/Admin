
export class User {

  userId: number;
  emailid: string;
  firstName: string;
  lastName: string;
  password: string;
  mobileNo: number;
  address: string;
  photo: string;

  constructor(userId, emailid, firstName, lastName, password, mobileNo, address, photo) {
    this.userId = userId;
    this.emailid = emailid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.mobileNo = mobileNo;
    this.address = address;
    this.photo = photo;
  }

}
