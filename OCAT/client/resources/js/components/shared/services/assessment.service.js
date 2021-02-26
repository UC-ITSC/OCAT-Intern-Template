import axios from "axios";

export class AssessmentService {
    static async submit (assessment) {
        try {
            //Choose the correct method, url, and data to send in a request to the express OCAT/server/routes
            await axios({});

            return;
        }
        catch (err) {
            throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
        }
    }
}