import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    try {
      // TODO: Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.post(`/assessments`, assessment)
        .then((response) => response.data);
    } catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static getList() {
    try {
      // TODO: Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.get(`/assessments`, {
        params: {
          // TODO: Add any query parameters here for filtering, pagination, etc.
        },
      })
        .then((response) => response.data.data.assessments);
    } catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
