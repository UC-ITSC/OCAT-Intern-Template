import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    try {
      return Axios.post(`/assessment/submit`, assessment)
        .then((response) => response.data.assessment);
    }
    catch (err) {

      if (err.response) {
        throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
      } else {
        throw new Error(err.message);
      }
    }
  }

  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.get(`/assessment/list`, {
        params: {
        },
      })
        .then(response => response.data.data.assessments);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

}
