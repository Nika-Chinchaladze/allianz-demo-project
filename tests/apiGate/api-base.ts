import axios from 'axios';

export default class ApiBase {
  public apiBaseUrl: string = process.env.API_BASE_URL as string;

  public async postMethod(
    endpoint: string,
    headersData: object,
    bodyData: string | object,
    errorMessage?: boolean,
  ): Promise<Record<string, never>> {
    let bodyInfo = {};
    const headers = headersData;
    await axios
      .post(endpoint, bodyData, { headers })
      .then(response => {
        bodyInfo = response.data;
      })
      .catch(error => {
        bodyInfo = error.response;
        if (errorMessage) {
          console.error(`
                Error code status: ${error.response.status}
                Error message: ${error.response.data.message}
                URL: ${endpoint}
                Headers to be send: ${JSON.stringify(headersData)}
                Request date and time: ${error.response.headers.date}
                `);
        }
      });
    return bodyInfo;
  }
}
