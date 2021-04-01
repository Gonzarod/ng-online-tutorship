import {UserInfo} from './user-info';
import {Course} from './course';

export interface Tutorship {
  id: number,
  topic: string,
  start_at: Date,
  end_at: Date,
  status: string,
  //student: UserInfo,
  //teacher: UserInfo,
  course: Course

}

/*
{
      "id": 15,
      "topic": "Segunda Guerra Mundial",
      "start_at": "2020-11-30T18:30:00",
      "end_at": "2020-11-30T20:30:00",
      "status": "OPEN",
      "student": {
        "id": 1,
        "username": "jesus.student",
        "email": "jesus@gmail.com",
        "roles": [
          {
            "id": 1,
            "name": "ROLE_STUDENT"
          }
        ],
        "name": "Jesus",
        "lastName": "Duran",
        "dni": "77332215",
        "phone": "994093796",
        "courses": []
      }
 */
