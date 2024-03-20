type pageRouterType = {
  home: { pathname: string; url: string };
  auth: {
    signIn: { pathname: string; url: string };
    signUp: { pathname: string; url: string };
  };
};

export const pageRouter: pageRouterType = {
  home: {
    pathname: "home",
    url: "/",
  },

  auth: {
    signIn: {
      pathname: "sign-in",
      url: "/sign-in",
    },

    signUp: {
      pathname: "sign-up",
      url: "/sign-up",
    },
  },
};
