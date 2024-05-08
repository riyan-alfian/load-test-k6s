import { sleep } from "k6";
import http from "k6/http";
// const sleep = require("k6")
// const http = require("k6/http")

export const options = {
  vus: 150,
  duration: '30s',
};


const hostKp = "http://localhost:8099"

export default function () {
  const paramCheckUser = { "username": "muridcxtujuhaa@kelaspintar.id", password: "e10adc3949ba59abbe56e057f20f883e" }
  const checkUser = http.post(`${hostKp}/auth/v1/check/username`, JSON.stringify({ username: paramCheckUser.username }), {
    headers: { 'Content-Type': 'application/json' },
  });

  if (checkUser) {
    const dataRest = checkUser.json();
    if (dataRest) {
      //login
      const loginUser = http.post(`${hostKp}/auth/v1/login`, JSON.stringify(paramCheckUser), {
        headers: { 'Content-Type': 'application/json' },
      });

      const loginRes = loginUser.json();

      if (loginRes) {
        const dataLogin = loginRes.data;
        if (dataLogin) {
          const accessToken = dataLogin.access_token;
     

          //get subject
          //https://api.kelaspintar.id/master/v1/subject-favorite
          const getSubjectFavorite = http.get(`${hostKp}/master/v1/subject-favorite`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          if (getSubjectFavorite) {
            const resGetSubject = getSubjectFavorite.json();
          
          }

          //https://api.kelaspintar.id/master/v1/subject-by-user-class
          http.get(`${hostKp}/master/v1/subject-by-user-class`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          //https://api.kelaspintar.id/uaa/v1/user/get-top-3
          http.get(`${hostKp}/uaa/v1/user/get-top-3`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          //https://api.kelaspintar.id/notification/v1/promo/
          http.get(`${hostKp}/notification/v1/promo/`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          //https://api.kelaspintar.id/blog/v1/info-pintar/?page=1&limit=4&tag=
          http.get(`${hostKp}/blog/v1/info-pintar/?page=1&limit=4&tag=`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          sleep(1.5)
          //https://api.kelaspintar.id/lms/v1/attendance/get-today-attendance
          http.get(`${hostKp}/lms/v1/attendance/get-today-attendance`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          })

          //https://api.kelaspintar.id/schedule/v1/class-session/2023-12-18
          http.get(`${hostKp}/lms/v1/schedule/v1/class-session/2023-12-18`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });

          //https://api.kelaspintar.id/lms/v1/student/ujian/schedule/
          const t003 = http.post(`${hostKp}/lms/v1/student/ujian/schedule/`, JSON.stringify({ "page": 0, "limit": 100, "search": "", "subject_id": [], "status": ["scheduled", "on_progress"] }), {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });
          if (t003) {
          
          }


          sleep(1.5)

          //https://api.kelaspintar.id/uaa/v1/user/get-user
          const t004 = http.get(`${hostKp}/uaa/v1/user/get-user`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });

          if (t004) {

          }

          //https://api.kelaspintar.id/master/v1/list-subject
          const t005 = http.get(`${hostKp}/master/v1/list-subject`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });

          if (t005) {

          }

          
          const t006 = http.post(`${hostKp}/lms/v1/student/ujian/schedule/`, JSON.stringify({ "page": 1, "limit": 9, "search": "", "subject_id": [], "status": ["scheduled", "on_progress"] }), {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });

          if (t006) {

          }

          const t007 = http.post(`${hostKp}/lms/v1/student/ujian/schedule/`, JSON.stringify({ "page": 1, "limit": 9, "search": "", "subject_id": [], "status": ["done", "done_scoring"] }), {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + accessToken
            },
          });
          if (t007) {
       
          }
        }
      }
    }
  }

}