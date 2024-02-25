import axiosClient_not_token from "./axiosClient_not_token";

const mailAPI = {
  send_mail: (params) => {
    const url = "/mail/send_mail";
    return axiosClient_not_token.post(url, params);
  },
};

export default mailAPI;
