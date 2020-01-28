import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { signInBegin } from "../../actions/signIn";
// import { NavLink } from "react-router-dom";
import store from "../../store";

import { getWorkspaceUrlBegin } from "../../actions/getWorkSpaceUrl";

const SignIn = props => {
  const { history } = props;

  const teamName = sessionStorage.getItem("team_name");
  useEffect(() => {
    store.dispatch(getWorkspaceUrlBegin({ domain: teamName }, history));
  }, [history, teamName]);
  const teamId = useSelector(state => state.workSpaceUrl.team_id);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      team: teamId
    },
    onSubmit: values => {
      const data = { team: teamId, ...values };
      data.team = teamId;
      store.dispatch(signInBegin(data, history));
    }
  });

  return (
    <div className="workSpace signIn col-12">
      <div className="card col-8">
        <h1>Sign in to {teamName}</h1>
        <form className="formWrap col-8" onSubmit={formik.handleSubmit}>
          <p className="labelTitle">{teamName}.slack.com</p>
          <div className="formControl">
            <p>
              Enter your <strong>email address</strong> and{" "}
              <strong>password.</strong>
            </p>
            <div className="inputWrap">
              <input
                className="inputBoxDomain"
                type="email"
                name="email"
                onChange={formik.handleChange}
                defaultValue={formik.values.email}
                placeholder="you@example.com"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                required
              />
            </div>
            <div className="inputWrap">
              <input
                className="inputBoxDomain"
                type="password"
                name="password"
                onChange={formik.handleChange}
                defaultValue={formik.values.password}
                placeholder="password"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                required
              />
            </div>
            <button className="btn large fullWidth" type="submit">
              Sign in
            </button>
            <div className="rememberMeLink">
              {" "}
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p className="signInBottomTxt">
              <a className="link" href="/">
                Forgot password?
              </a>
              {""} · {""}
              <a className="link" href="/">
                Forgot which email you used?
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
