const Host = {
  ROOT: "http://localhost:3000",
  BACKEND:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:3002"
      : "https://backend-multic.herokuapp.com",
  PREFIX: "/v1/api",
};
const ApiEndpoints = {
  subscribeEndpoints: {
    route: `${Host.BACKEND}${Host.PREFIX}/subscribe`,
    getSubscribe_list: `/list`,
  },
  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    create: `/create`,  
    delete: `/delete`,  
    me: `/me`,  
    edit: `/edit`,
    resetPassword : `/reset-password`,
    image: `/image`,
    forgotPassword: `/forgot-password`,
    count: `/count`,
  },
  FileEndpoints: {
    route: `${Host.PREFIX}/file`,
    createSingleImage: `/create-single-image`,
  },
};

export { ApiEndpoints, Host };
